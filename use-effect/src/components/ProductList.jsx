import {useEffect, useState} from "react";

const initialState = {
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placehold.co/600x400"]
}

const fetchProduct = async(productId) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return response.json()
}

const fetchProducts = async() => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return await response.json()
}

const saveProduct = async(body) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }
    )

    if (!response.ok) {
        throw new Error("Failed to fetch products.");
    }

    return await response.json()
}

const getProductsList = async() => {
    const products = await fetchProducts()
    return products.map(product => { return {
        id: product.id,
        title: product.title,
        price: product.price
    }})
}

export const ProductList = () => {
    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productList, setProductList] = useState([]);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const products = await getProductsList()
            setProductList(products)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);
            const product = await saveProduct(form)
            console.log(product)
            setForm(initialState)
            await loadProducts()
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (e) => {
        setForm(prev => ( { ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                <label>Title</label>
                <
                    input
                    name='title'
                    type="text"
                    value={form.title}
                    placeholder='Add title here'
                    onChange={handleInputChange}
                    className='border-2 border-gray-300'
                />

                <label>Description</label>
                <
                    input
                    name='description'
                    type="text"
                    value={form.description}
                    placeholder='Add description here'
                    onChange={handleInputChange}
                    className='border-2 border-gray-300'
                />

                { loading ? 'Loading..' : <input type='submit' value='Submit' className='border-2 border-gray-300 bg-gray-300' /> }
                { error && <p className={'bg-red-300 p-2'}>{error.message}</p> }

            </form>
            <div>
                {
                    productList.map(product => (
                        <div key={product.id}>{product.id} - {product.title}</div>
                    ))
                }
            </div>
        </div>
    )
}