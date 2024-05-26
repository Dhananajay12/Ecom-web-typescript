export interface Product {
	_id: number,
	name: string,
	description: string,
	feturedImg?: any,
	gallery: string[],
	measurements:string,
	salePrice: number,
	price: number,
	star: number,
	productId:number
}
export interface ProductVariant {
	_id: string,
	star: 0,
	productId: number,
	name: string,
	sku: string,
	price: number,
	salePrice: number,
	weight: number,
	inStock:boolean,
	length: number,
	breadth: number,
	height: number,
	inStockCount: number,
	productVariantId: number,
}