import { useEffect } from "react";
import { productSelectors, fetchProductsAsync, fetchFilters } from "../../features/catalog/catalogSlice";
import { useAppSelector, useAppDispatch } from "../store/configureStore";

export default function useProducts() {

    const products = useAppSelector(productSelectors.selectAll); //gives list of products
    const {productsLoaded,  filtersLoaded, brands, types, metaData} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch]) //set empty array as dependency so useEffect is only ever called once instead of every time it's re-rendering
    
    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded])

    return {
        products,
        productsLoaded,
        filtersLoaded,
        brands,
        types,
        metaData
    }

}