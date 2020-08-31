import { ActionTypes } from '../actions';

export interface UpdateFormAction {
	type: ActionTypes.updateForm;
	payload: { inputName: string; value: number | string };
}

export const updateForm = (
	inputName: string,
	value: number | string
): UpdateFormAction => {
	return {
		type: ActionTypes.updateForm,
		payload: { inputName, value }
	};
};
