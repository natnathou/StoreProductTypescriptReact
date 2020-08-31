import { ActionTypes } from '../actions';
import { ProductProriety } from '../tools/ProductsCollection';

export interface Sorter {
	type: ActionTypes.sorter;
	payload: 'Sort By' | ProductProriety;
}
export const sorter = (propriety: 'Sort By' | ProductProriety): Sorter => {
	return {
		type: ActionTypes.sorter,
		payload: propriety
	};
};
