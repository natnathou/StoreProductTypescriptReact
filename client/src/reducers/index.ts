import { combineReducers, Action } from 'redux';
import { formReducer, FormState } from './formReducer';
import { productListReducer, ProductsListState } from './productsListReducers';
import { formIsDisplayReducer } from './fomIsDisplayReducer';
import { StateSorter, sorterReducer } from './sorterReducer';

export interface StoreState {
	formIsDisplay: boolean;
	form: FormState;
	products: ProductsListState;
	sorterStatus: StateSorter;
}
export const reducers = combineReducers<StoreState, Action>({
	formIsDisplay: formIsDisplayReducer,
	form: formReducer,
	products: productListReducer,
	sorterStatus: sorterReducer
});
