import { IProduct } from "../../inventory-management.interface";
import { IWidgetsData } from "./widgets.interface";

const getTotalProducts = (
  products: IProduct[],
  disabledProductIds: string[]
): number => {
  const filteredProducts = products.filter(
    (product) => !disabledProductIds.includes(product.name)
  );
  return filteredProducts.length;
};

const getTotalStoreValue = (
  products: IProduct[],
  disabledProductIds: string[]
): number => {
  return products.reduce((total, product) => {
    if (disabledProductIds.includes(product.name)) {
      return total;
    }
    const price = parseFloat(product.price.replace("$", ""));
    if (!isNaN(price)) {
      return total + price * product.quantity;
    } else {
      return total;
    }
  }, 0);
};

const getOutOfStocks = (
  products: IProduct[],
  disabledProductIds: string[]
): IProduct[] => {
  return products.filter(
    (product) =>
      !disabledProductIds.includes(product.name) && product.quantity === 0
  );
};

const getNumberOfCategories = (
  products: IProduct[],
  disabledProductIds: string[]
): number => {
  const filteredProducts = products.filter(
    (product) => !disabledProductIds.includes(product.name)
  );
  const categories = new Set<string>();
  filteredProducts.forEach((product) => categories.add(product.category));
  return categories.size;
};

export const getWidgetsData = (
  products: IProduct[],
  disabledProductIds: string[]
): IWidgetsData => {
  const totalProduct = getTotalProducts(products, disabledProductIds);
  const totalStoreValue = getTotalStoreValue(products, disabledProductIds);
  const outOfStocksProduct = getOutOfStocks(
    products,
    disabledProductIds
  ).length;
  const noOfCategory = getNumberOfCategories(products, disabledProductIds);
  return {
    totalProduct,
    totalStoreValue,
    outOfStocksProduct,
    noOfCategory,
  };
};
