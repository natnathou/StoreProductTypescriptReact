import { ActionTypes } from '../actions';

export interface DisplayForm {
	type: ActionTypes.displayForm;
}
export const displayForm = (): DisplayForm => {
	return {
		type: ActionTypes.displayForm
	};
};
