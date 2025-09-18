
import { useParams } from "react-router";
import {useEffect, useState} from "react";


const fetchProduct = async(productId) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
    }
    return response.json()
}

export const ProductPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    console.log(id);

    const loadProduct = async () => {
        try {
            setLoading(true);
            const product = await fetchProduct(id);
            console.log(product)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect( () => {
        loadProduct();
        }, [])

    return (
        <div>
            Hello, I'm the product page!
        </div>
    )
}