export interface IWidgetConfig {
  Label: string;
  Icon: JSX.Element;
  Value: number;
}

export interface IWidgetsData {
  totalProduct: number;
  totalStoreValue: number;
  outOfStocksProduct: number;
  noOfCategory: number;
}

export interface IWidget extends IWidgetConfig {}
