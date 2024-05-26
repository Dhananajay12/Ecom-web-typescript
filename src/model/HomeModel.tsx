import { IResponse } from "./CommonModel";
import { Product } from "./ProductModel";


export interface IProductMultipleResponse extends IResponse {
	data: Product[],
}
export interface IProductSingleResponse extends IResponse {
	data: Product,
}
export interface IProductSingleResponse extends IResponse {
	data: Product,
}