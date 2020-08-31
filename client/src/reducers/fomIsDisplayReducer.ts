import { Action, ActionTypes } from '../actions';

export const formIsDisplayReducer = (state = false, action: Action) => {
	switch (action.type) {
		case ActionTypes.displayForm:
			return true;
		default:
			return state;
	}
};
