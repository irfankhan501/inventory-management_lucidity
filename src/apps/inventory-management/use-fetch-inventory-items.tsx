import { useEffect } from 'react';
import useInventoryManagementStore from './inventory-management.store';
import { fetchData } from './utils';
import { INVENTORY_ITEMS_API_URL } from './constants'
import {MOCK_PRODUCTS} from './data'


interface IUseFetchInventoryItems {
    isLoading: boolean;
}

const useFetchInventoryItems = (): IUseFetchInventoryItems => {
    const { isLoading, setIsLoading, setProducts } = useInventoryManagementStore((state) => ({
        isLoading: state.isLoading,
        setIsLoading: state.setIsLoading,
        products: state.products,
        setProducts: state.setProducts,
    }));

    const fetchProducts = async (): Promise<void> => {
        try {
            setIsLoading(true);
            const response = await fetchData(INVENTORY_ITEMS_API_URL);
            setProducts(response || MOCK_PRODUCTS);
        } catch (error) {
            console.error("Error fetchProducts data:", error);
            // API failing most of the time, using mock data
            setProducts(MOCK_PRODUCTS)
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isLoading };
};

export default useFetchInventoryItems;
