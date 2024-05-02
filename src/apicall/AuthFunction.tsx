import axios from 'axios';
// import Store from '../store/store';

const instance = axios.create({
	baseURL: `${import.meta.env.VITE_REACT_BASE_URL}/api/v3`,
});

instance.interceptors.request.use(
	(config) => {
		// const state = Store.getState();

		// const { token } = state?.userReducer?.userLoginInfo;
		// if (token) {
		// 	const modifiedConfig = {
		// 		...config,
		// 		headers: {
		// 			...config.headers,
		// 			Authorization: `Bearer ${token}`,
		// 		},
		// 	};
		// 	return modifiedConfig;
		// }
		return config;
	},
	(error) => console.log(error),
);

export default instance;
