import { Action, ActionTypes } from '../actions';

export interface stateIsDisplay {
	status: boolean;
}

export const formIsDisplayReducer = (
	state: stateIsDisplay = { status: false },
	action: Action
) => {
	console.log('new status');

	switch (action.type) {
		case ActionTypes.displayForm:
			return { ...state, status: true };
		default:
			return { ...state };
	}
};
