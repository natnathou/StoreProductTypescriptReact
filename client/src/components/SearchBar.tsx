import React, { useEffect, MouseEvent } from 'react';
import { connect } from 'react-redux';
import {
	updateSearch,
	updateResults,
	updateForm,
	displayForm
} from '../actions';
import { StoreState } from '../reducers';
import { SearchState } from '../reducers/searchReducer';
import { ProductsListState } from '../reducers/productsListReducers';

interface AppProps {
	products: ProductsListState;
	search: SearchState;
	updateSearch: typeof updateSearch;
	updateResults: Function;
	updateForm: typeof updateForm;
	displayForm: typeof displayForm;
}
const _SearchBar = ({
	products,
	search,
	updateSearch,
	updateResults,
	updateForm,
	displayForm
}: AppProps): JSX.Element => {
	useEffect(() => {
		const bodyListener = (): void => {
			updateResults(false);
		};

		window.addEventListener('click', bodyListener);

		return () => window.removeEventListener('click', bodyListener);
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		updateSearch(event.target.value);
		updateResults(true);
	};

	const handleClickModify = (event: MouseEvent<HTMLDivElement>): void => {
		let id = event.currentTarget.id;
		updateForm('title', products[id]['title']);
		updateForm('description', products[id]['description']);
		updateForm('picture', products[id]['picture']);
		updateForm('price', products[id]['price']);
		updateForm(new Date().toString(), products[id]['date']);
		updateForm('id', products[id]['id']);
		displayForm();
		updateSearch('');
	};

	const searchInput = (): JSX.Element => {
		return (
			<div className='ui fluid category search'>
				<div className='ui icon input'>
					<input
						className='prompt'
						type='text'
						placeholder='Search Products...'
						value={search.search}
						onChange={handleChange}
					/>
					<i className='search icon'></i>
				</div>
				{resultsRender()}
			</div>
		);
	};

	const resultList = (): JSX.Element[] | undefined =>
		search.results?.map((data, index) => {
			return (
				<div
					className='item'
					key={index}
					id={data.id.toString()}
					onClick={handleClickModify}
				>
					<img
						className='ui avatar image'
						src={data.picture}
						alt={data.title}
					/>
					<div className='content'>
						<div className='header'>{data.title}</div>
					</div>
				</div>
			);
		});

	const resultsRender = (): JSX.Element => {
		return (
			<div
				className={`results ${search.displayResults ? `visible` : ``}`}
			>
				<div className='ui middle aligned divided list'>
					{resultList()}
				</div>
			</div>
		);
	};

	return <div>{searchInput()}</div>;
};

const mapStateToProps = ({
	search,
	products
}: StoreState): { search: SearchState; products: ProductsListState } => {
	return { search, products };
};

export const SearchBar = connect(mapStateToProps, {
	updateSearch,
	updateResults,
	updateForm,
	displayForm
})(_SearchBar);
