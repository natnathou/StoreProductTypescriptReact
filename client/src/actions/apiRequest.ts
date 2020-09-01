import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../actions';
import { FormState } from '../reducers/formReducer';

export interface Product {
	title: string;
	picture: string;
	description: string;
	price: number;
	date: string;
	id: number;
}

export interface FetchDb {
	type: ActionTypes.fetchDb;
	payload: Product[];
}

export interface PostItem {
	type: ActionTypes.postItem;
	payload: Product;
}

export interface PatchItem {
	type: ActionTypes.patchItem;
	payload: Product;
}

export interface DeleteItem {
	type: ActionTypes.deleteItem;
	payload: string;
}

export const fetchDb = () => async (dispatch: Dispatch) => {
	let response: AxiosResponse<Product[]>;

	try {
		response = await axios.get<Product[]>('/products');
	} catch (e) {
		response = e;
	}
	dispatch<FetchDb>({
		type: ActionTypes.fetchDb,
		payload: response.data
	});
};

export const postItem = (formValue: Product) => async (dispatch: Dispatch) => {
	let response: AxiosResponse<Product>;

	try {
		response = await axios.post<Product>('/products', { ...formValue });
	} catch (e) {
		response = e;
	}
	dispatch<PostItem>({
		type: ActionTypes.postItem,
		payload: response.data
	});
};

export const patchItem = (id: string, formValue: FormState) => async (
	dispatch: Dispatch
) => {
	let response: AxiosResponse<Product>;

	try {
		response = await axios.patch<Product>(`/products/${id}`, {
			...formValue
		});
	} catch (e) {
		response = e;
	}
	dispatch<PatchItem>({
		type: ActionTypes.patchItem,
		payload: response.data
	});
};

export const deleteItem = (id: string) => async (dispatch: Dispatch) => {
	try {
		await axios.delete<Product>(`/products/${id}`);
	} catch (e) {}
	dispatch<DeleteItem>({
		type: ActionTypes.deleteItem,
		payload: id
	});
};
