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