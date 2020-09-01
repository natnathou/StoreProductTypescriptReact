import { Action, ActionTypes } from '../actions';

type Price = number | '';
export interface FormState {
	title: string;
	picture: string;
	description: string;
	price: Price;
	date: String;
	id?: number;
}
const initialState: FormState = {
	title: '',
	picture: '',
	description: '',
	date: '',
	price: ''
};

export const formReducer = (
	state: FormState = initialState,
	action: Action
) => {
	switch (action.type) {
		case ActionTypes.updateForm:
			return {
				...state,
				[action.payload.inputName]: action.payload.value
			};
		case ActionTypes.resetForm:
			return { ...initialState };
		default:
			return { ...state };
	}
};
