import React, { FormEvent, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers/index';
import { updateForm, postItem, patchItem } from '../actions';
import { FormState } from '../reducers/formReducer';

interface AppProps {
	form: FormState;
	updateForm: typeof updateForm;
	postItem: Function;
	patchItem: Function;
}

interface ErrorField {
	status: boolean;
	message: string;
}

const _Form = ({
	form,
	updateForm,
	postItem,
	patchItem
}: AppProps): JSX.Element => {
	const [errField, _setErrField] = useState<ErrorField>({
		status: false,
		message: ''
	});

	const myErrFieldRef = useRef(errField);

	const setErrField = (data: ErrorField) => {
		myErrFieldRef.current = data;
		_setErrField(data);
	};

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		if (e.target.id === 'price' || e.target.id === 'price') {
			updateForm(e.target.id, parseFloat(e.target.value));
		} else {
			updateForm(e.target.id, e.target.value);
		}
	};

	const handleSubmit = (e: FormEvent): void => {
		if (form.title.split('').length < 6 || !form.picture || !form.price) {
			setErrField({
				status: true,
				message:
					"Title must have 30 word, Url, And Price can't be empty"
			});
		}
		e.preventDefault();
		if (!myErrFieldRef.current.status) {
			if (form.id) {
				patchItem(form.id, form);
			} else {
				postItem(form);
			}
		}
	};

	return (
		<form className='ui form' onSubmit={handleSubmit}>
			<div className='field'>
				<label htmlFor='picture'>Url Picture:</label>
				<input
					type='text'
					id='picture'
					onChange={handleChange}
					value={form.picture}
				/>
			</div>
			<div className='field'>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					id='title'
					onChange={handleChange}
					value={form.title}
				/>
			</div>
			<div className='field'>
				<label htmlFor='description'>Description:</label>
				<div className='field'>
					<textarea
						id='description'
						cols={30}
						rows={10}
						onChange={handleChange}
						value={form.description}
					></textarea>
				</div>
			</div>
			<div className='field'>
				<label htmlFor='price'>Price:</label>
				<input
					type='number'
					id='price'
					onChange={handleChange}
					value={form.price}
				/>
			</div>
			{errField.status ? (
				<div className='field error'>
					<input
						type='text'
						id='error'
						defaultValue={errField.message}
					/>
				</div>
			) : null}

			<button className='ui button' type='submit'>
				Save
			</button>
		</form>
	);
};

const mapStateToProps = ({ form }: StoreState): { form: FormState } => {
	return { form };
};

export const Form = connect(mapStateToProps, {
	updateForm,
	postItem,
	patchItem
})(_Form);
