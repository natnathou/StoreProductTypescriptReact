import { ActionTypes } from '.';

export interface SearchProducts {
	type: ActionTypes.search;
	payload: string;
}

export const updateSearch = (value: string): SearchProducts => {
	return {
		type: ActionTypes.search,
		payload: value
	};
};
