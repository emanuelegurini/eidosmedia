import {useEffect, useState} from "react";


const initialState = {
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placehold.co/600x400"]
}

/*
*   1. I need a form
*   2. I need to store the data in state
*   3. I need to send data stored in the state with the fetch method
*   4. Data should be parsed before sending to the browser
*
*/

export const ProductList = () => {

    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productList, setProductList] = useState([]);


    /*
     * This function get all products stored in the server
     */
    const fetchData = () => {

        fetch(`https://api.escuelajs.co/api/v1/products`)
            .then(res => res.json())
            .then(data => setProductList(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));

    }

    useEffect(() => {

        setLoading(true);
        fetchData()
    }, [])

    /*
     * This function handle the submit event, executing the post request to the server
     */
    const handleSubmit = (e) => {

        // This e.preventDefault blocks the page refreshing,
        // as default behaviour of the application
        e.preventDefault();

        setLoading(true);

        fetch(`https://api.escuelajs.co/api/v1/products`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(data => {

                if(data.statusCode !== 200) {
                    setError(data);
                }

                console.log(data);
                setForm(initialState)
                fetchData()
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
        })
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
                { error && <p className={'bg-amber-200'}>{error.message}</p> }

            </form>
            {
                productList.map(product => (
                    <div key={product.id}>{product.title}</div>
                ))
            }
        </div>
    )
}