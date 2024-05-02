import instance from "./AuthFunction";

export const fetchProduct = async  () => {

	await instance.get('/products')
		.then((response:any) => {
			return response;
		})
		.catch((err) => err);
};