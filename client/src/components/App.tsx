import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { ProductsList } from './ProductsList';
import { Dropdown } from './Dropdown';
import { StoreState } from '../reducers';
import { displayForm, resetForm } from '../actions';
import '../style/App.css';

interface AppProps {
	formIsDisplay: boolean;
	displayForm: typeof displayForm;
	resetForm: typeof resetForm;
}
export const _App = ({
	formIsDisplay,
	displayForm,
	resetForm
}: AppProps): JSX.Element => {
	const handleClickAdd = (): void => {
		resetForm();
		displayForm();
	};
	return (
		<div className='App ui container'>
			<div
				className={`ui stackable ${
					formIsDisplay ? `two` : `one`
				} column grid`}
			>
				<div className='column'>
					<div className='buttonHeadApp'>
						<div>
							<button
								className='ui button'
								onClick={handleClickAdd}
							>
								Add
							</button>
						</div>
						<Dropdown />
					</div>
					<ProductsList />
				</div>
				{formIsDisplay ? (
					<div className='column'>
						<Form />
					</div>
				) : null}
			</div>
		</div>
	);
};

const mapStateToProps = ({
	formIsDisplay
}: StoreState): { formIsDisplay: boolean } => {
	return { formIsDisplay };
};

export const App = connect(mapStateToProps, { displayForm, resetForm })(_App);
