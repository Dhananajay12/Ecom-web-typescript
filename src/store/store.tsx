import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';


import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const RootReducers = combineReducers({
	cartReducer,
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
});

export const PStore = persistStore(Store);

export default Store;