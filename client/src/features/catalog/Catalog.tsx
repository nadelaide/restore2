import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() { //specifies the properties you need

    const products = useAppSelector(productSelectors.selectAll); //gives list of products
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch]) //set empty array as dependency so useEffect is only ever called once instead of every time it's re-rendering
    
    if (status.includes('pending')) return <LoadingComponent message='Loading products...'/>

    return (
        <>
            <ProductList products={products} />
        </>
         
    )
}