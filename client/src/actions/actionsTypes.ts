import {
	DisplayForm,
	UpdateFormAction,
	ResetForm,
	FetchDb,
	PostItem,
	PatchItem,
	DeleteItem,
	Sorter
} from '../actions';

export enum ActionTypes {
	displayForm = 'DISPLAY_FORM',
	updateForm = 'UPDATE_FORM',
	resetForm = 'RESET_FORM',
	fetchDb = 'FETCH_DB',
	postItem = 'POST_ITEM',
	patchItem = 'PATCH_ITEM',
	deleteItem = 'DELETE_ITEM',
	sorter = 'SORTER'
}

export type Action =
	| UpdateFormAction
	| ResetForm
	| FetchDb
	| PostItem
	| PatchItem
	| DeleteItem
	| DisplayForm
	| Sorter;
