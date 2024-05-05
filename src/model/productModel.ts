export interface Product {
	_id: number,
	name: string,
	description: string,
	feturedImg?: any,
	gallery: string[],
	measurements:string,
	salePrice: number,
	price: number,
	star: number
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
	length: number,
	breadth: number,
	height: number,
	inStockCount: number,
	productVariantId: number
}