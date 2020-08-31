import { Action, ActionTypes } from '../actions';
import { ProductProriety } from '../tools/ProductsCollection';

export type StateSorter = 'Sort By' | ProductProriety;

export const sorterReducer = (
	state: StateSorter = 'Sort By',
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.sorter:
			return action.payload;
		default:
			return state;
	}
};
