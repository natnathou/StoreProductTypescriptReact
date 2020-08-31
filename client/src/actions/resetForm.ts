import { ActionTypes } from './actionsTypes';

export interface ResetForm {
	type: ActionTypes.resetForm;
}

export const resetForm = (): ResetForm => {
	return {
		type: ActionTypes.resetForm
	};
};
