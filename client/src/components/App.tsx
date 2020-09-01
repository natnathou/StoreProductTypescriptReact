import React from 'react';
import { connect } from 'react-redux';
import { Form } from './Form';
import { ProductsList } from './ProductsList';
import { Dropdown } from './Dropdown';
import { SearchBar } from './SearchBar';
import { StoreState } from '../reducers';
import { displayForm, resetForm } from '../actions';
import { stateIsDisplay } from '../reducers/formIsDisplayReducer';
import '../style/App.css';

interface AppProps {
	formIsDisplay: stateIsDisplay;
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
					formIsDisplay.status ? `two` : `one`
				} column grid`}
			>
				<div
					className='column'
					style={{
						minWidth: `577px`,
						marginLeft: `auto`,
						marginRight: `auto`
					}}
				>
					<div className='buttonHeadApp'>
						<div>
							<button
								className='ui button'
								onClick={handleClickAdd}
							>
								Add
							</button>
						</div>
						<div className='rightSideHeadApp'>
							<SearchBar />
							<Dropdown />
						</div>
					</div>
					<ProductsList />
				</div>
				{formIsDisplay.status ? (
					<div
						className='column'
						style={{
							minWidth: `577px`,
							marginLeft: `auto`,
							marginRight: `auto`
						}}
					>
						<Form />
					</div>
				) : null}
			</div>
		</div>
	);
};

const mapStateToProps = ({
	formIsDisplay
}: StoreState): { formIsDisplay: stateIsDisplay } => {
	return { formIsDisplay };
};

export const App = connect(mapStateToProps, { displayForm, resetForm })(_App);
