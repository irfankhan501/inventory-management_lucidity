import { create } from "zustand";
import { IProduct, View } from "./inventory-management.interface";

interface IInventoryManagementStore {
  isLoading: boolean;
  view: View;
  products: IProduct[] | undefined;
  disabledProductIds: string[];
  setIsLoading: (loading: boolean) => void;
  setProducts: (products: IProduct[] | undefined) => void;
  updateProduct: (updatedProduct: IProduct) => void;
  deleteProduct: (id: string) => void;
  setDisabledProductId: (id: string) => void;
  removeDisabledProductId: (id: string) => void;
  toggleView: () => void;
}

const initialState = {
  isLoading: false,
  view: View.Admin,
  products: undefined,
  disabledProductIds: [],
};

const useInventoryManagementStore = create<IInventoryManagementStore>(
  (set) => ({
    // state
    ...initialState,

    // setState
    setIsLoading: (loading: boolean): void => {
      set({
        isLoading: loading,
      });
    },
    setProducts: (products: IProduct[] | undefined): void => {
      set(() => ({
        products,
      }));
    },
    deleteProduct: (id: string): void => {
      set((state) => ({
        products: state.products?.filter((item) => item.name !== id),
      }));
    },
    setDisabledProductId: (id: string): void => {
      set((state) => ({
        disabledProductIds: [...state.disabledProductIds, id],
      }));
    },
    removeDisabledProductId: (id: string): void => {
      set((state) => ({
        disabledProductIds: state.disabledProductIds?.filter(
          (productId) => productId !== id
        ),
      }));
    },
    updateProduct: (updatedProduct: IProduct): void => {
      set((state) => {
        const updatedProducts = state.products?.map((product) => {
          if (product.name === updatedProduct.name) {
            return {
              ...product,
              ...updatedProduct,
            };
          }
          return product;
        });
        return {
          ...state,
          products: updatedProducts,
        };
      });
    },
    toggleView: (): void => {
      set((state) => ({
        view: state.view === View.Admin ? View.User : View.Admin,
      }));
    },
  })
);

export default useInventoryManagementStore;
