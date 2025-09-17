import {useEffect, useState} from "react";

export const ProductList = () => {

    /**
     * create a form that has two inputs value.
     * When you click on submit, you execute a post request.
     * And you save a new object with title and description written by the user.
     */
    const [product, setProduct] = useState(null);

    useEffect(() => {

        const newProducts = {
            "title": "New Product yo",
            "price": 10,
            "description": "A description",
            "categoryId": 1,
            "images": ["https://placehold.co/600x400"]
        }

        fetch(`https://api.escuelajs.co/api/v1/products/102`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])

    return (
        <div>
            Product: {product?.title ?? "Object doesn't exist"}
        </div>
    )
}