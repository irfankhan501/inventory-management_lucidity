import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import { IWidgetsData, IWidgetConfig } from "./widgets.interface";

export const getWidgetsConfig = (data: IWidgetsData): IWidgetConfig[] => {
  return [
    {
      Label: "Total product",
      Icon: <ShoppingCartIcon />,
      Value: data.totalProduct || 0,
    },
    {
      Label: "Total store value",
      Icon: <CurrencyExchangeIcon />,
      Value: data.totalStoreValue || 0,
    },
    {
      Label: "Out of stocks product",
      Icon: <RemoveShoppingCartIcon />,
      Value: data.outOfStocksProduct || 0,
    },
    {
      Label: "No of Category",
      Icon: <CategoryIcon />,
      Value: data.noOfCategory || 0,
    },
  ];
};
