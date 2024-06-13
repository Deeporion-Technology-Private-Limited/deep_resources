export interface IProductDetails{
  productDetail?: string,
  sizeAndFit?: string,
  materialAndCare?: string,
}

export interface IProductSpecifications{
  fabric?: string;
  hemline?: string;
  length?: string;
  neck?: string;
  fabricType?: string;
  knitOrWoven?: string;
  mainTrend?: string;
  occasion?: string;
  color?: string,
  style?: string,
}

export interface IProduct{
  productCode?: string,
  productDetails?: IProductDetails,
  productSpecifications?: IProductSpecifications,
}
