import { Action, ActionTypes, Product } from '../actions';

export interface SearchState {
	search?: string;
	displayResults?: boolean;
	results?: Product[];
}

const initialState = {
	search: ''
};
export const searchReducer = (
	state: SearchState = initialState,
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.search:
			return {
				...state,
				search: action.payload
			};
		case ActionTypes.updateResults:
			return {
				...state,
				displayResults: action.payload.displayResults,
				results: action.payload.results
			};
		default:
			return state;
	}
};
