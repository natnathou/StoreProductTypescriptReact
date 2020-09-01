import _ from 'lodash';
import { ActionTypes, Product } from '../actions';
import { Dispatch } from 'redux';
import { StoreState } from '../reducers';

export interface UpdateResults {
	type: ActionTypes.updateResults;
	payload: { displayResults: boolean; results: Product[] };
}

export const updateResults = (displayResults: boolean) => (
	dispatch: Dispatch,
	getState: () => StoreState
) => {
	let results: Product[] = [];
	let { search } = getState().search;
	let products = _.toArray(getState().products);

	products.forEach((data) => {
		if (
			data.title.toLowerCase().includes(search?.toLowerCase() as string)
		) {
			results.push(data);
		}
	});

	dispatch<UpdateResults>({
		type: ActionTypes.updateResults,
		payload: { displayResults, results }
	});
};
