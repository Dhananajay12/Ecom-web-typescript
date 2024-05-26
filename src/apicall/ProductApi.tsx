import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductSingleResponse } from '../model/HomeModel'

export const productsApi = createApi({
	reducerPath: 'products',
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_BASE_URL}/api/v3` }),
	endpoints: (builder) => ({
		getProductsById: builder.query<IProductSingleResponse, string>({
			query: (id) => `/products/getById/${id}`,
		}),
	}),
})
export const { useGetProductsByIdQuery } = productsApi