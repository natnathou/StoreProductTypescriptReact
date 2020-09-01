import { combineReducers, Action } from 'redux';
import { formReducer, FormState } from './formReducer';
import { productListReducer, ProductsListState } from './productsListReducers';
import { formIsDisplayReducer, stateIsDisplay } from './formIsDisplayReducer';
import { StateSorter, sorterReducer } from './sorterReducer';
import { searchReducer, SearchState } from './searchReducer';

export interface StoreState {
	formIsDisplay: stateIsDisplay;
	form: FormState;
	products: ProductsListState;
	sorterStatus: StateSorter;
	search: SearchState;
}
export const reducers = combineReducers<StoreState, Action>({
	formIsDisplay: formIsDisplayReducer,
	form: formReducer,
	products: productListReducer,
	sorterStatus: sorterReducer,
	search: searchReducer
});
