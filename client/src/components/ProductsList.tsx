import React, { useEffect, MouseEvent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { StoreState } from '../reducers/index';
import { StateSorter } from '../reducers/sorterReducer';
import {
	fetchDb,
	Product,
	deleteItem,
	updateForm,
	displayForm
} from '../actions';
import { ProductsListState } from '../reducers/productsListReducers';
import { ProductsCollection } from '../tools/ProductsCollection';
import '../style/ProductsList.css';

interface AppProps {
	products: ProductsListState;
	sorterStatus: StateSorter;
	fetchDb: Function;
	deleteItem: Function;
	updateForm: typeof updateForm;
	displayForm: typeof displayForm;
}

const _ProductsList = ({
	products,
	sorterStatus,
	fetchDb,
	deleteItem,
	updateForm,
	displayForm
}: AppProps): JSX.Element => {
	useEffect(() => {
		fetchDb();
	}, [fetchDb]);

	const handleClickModify = (event: MouseEvent<HTMLDivElement>): void => {
		let id = event.currentTarget.id;
		updateForm('title', products[id]['title']);
		updateForm('description', products[id]['description']);
		updateForm('picture', products[id]['picture']);
		updateForm('price', products[id]['price']);
		updateForm(new Date().toString(), products[id]['date']);
		updateForm('id', products[id]['id']);
		displayForm();
	};

	const renderList = () => {
		let productsToRender = _.toArray<Product>(products);
		let arrayProducts = ProductsCollection.create(productsToRender);
		switch (sorterStatus) {
			case 'title':
				arrayProducts.sort('title');
				productsToRender = arrayProducts.data;
				break;
			case 'price':
				arrayProducts.sort('price');
				productsToRender = arrayProducts.data;
				break;
			case 'date':
				arrayProducts.sort('date');
				productsToRender = arrayProducts.data;
				break;
			default:
				break;
		}

		return productsToRender.map((data, index) => {
			return (
				<div className='item' key={index}>
					<img
						className='ui bordered image'
						width={150}
						height={100}
						src={data.picture}
						alt={data.title}
					/>
					<div className='content'>
						<div className='sub header'>
							{data.title}
							<br />
							<br />
						</div>
						<div className=''>
							{data.description}
							<br />
							<br />
						</div>
						<div className=''>{data.price}</div>
					</div>
					<div
						className='right floated content'
						style={{
							display: `flex`,
							flexDirection: `column`
						}}
					>
						<div
							className='ui button primary'
							id={data.id.toString()}
							onClick={handleClickModify}
							style={{ margin: `10px` }}
						>
							Modify
						</div>
						<div
							className='ui button red'
							onClick={(): Function => deleteItem(data.id)}
							style={{ margin: `10px` }}
						>
							Delete
						</div>
					</div>
				</div>
			);
		});
	};

	return <div className='ui middle aligned divided list'>{renderList()}</div>;
};

const mapStateToProps = ({
	products,
	sorterStatus
}: StoreState): { products: ProductsListState; sorterStatus: StateSorter } => {
	return { products, sorterStatus };
};

export const ProductsList = connect(mapStateToProps, {
	fetchDb,
	deleteItem,
	updateForm,
	displayForm
})(_ProductsList);
