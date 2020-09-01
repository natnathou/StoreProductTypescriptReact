import {
	DisplayForm,
	UpdateFormAction,
	ResetForm,
	FetchDb,
	PostItem,
	PatchItem,
	DeleteItem,
	Sorter,
	SearchProducts,
	UpdateResults
} from '../actions';

export enum ActionTypes {
	displayForm,
	updateForm,
	resetForm,
	fetchDb,
	postItem,
	patchItem,
	deleteItem,
	sorter,
	search,
	updateResults
}

export type Action =
	| UpdateFormAction
	| ResetForm
	| FetchDb
	| PostItem
	| PatchItem
	| DeleteItem
	| DisplayForm
	| Sorter
	| SearchProducts
	| UpdateResults;
