import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';


import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsApi } from "../apicall/ProductApi";

const RootReducers = combineReducers({
	cartReducer,
	[productsApi.reducerPath]: productsApi.reducer
});

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
export type RootState = ReturnType<typeof RootReducers>;

const persistedReducer = persistReducer(persistConfig, RootReducers)

const Store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

export const PStore = persistStore(Store);

export default Store;