import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() { //specifies the properties you need

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        //fetch products from API
        fetch('http://localhost:5000/api/Products')
            //returns a promise
            .then(response => response.json()) //turns promise response into json
            .then(data => setProducts(data)) //setProducts to the data that was returned
    }, []) //set empty array as dependency so useEffect is only ever called once instead of every time it's re-rendering
    
    return (
        <>
            <ProductList products={products} />
        </>
         
    )
}