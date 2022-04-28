import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() { //specifies the properties you need

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, []) //set empty array as dependency so useEffect is only ever called once instead of every time it's re-rendering
    
    if (loading) return <LoadingComponent message='Loading products...'/>

    return (
        <>
            <ProductList products={products} />
        </>
         
    )
}