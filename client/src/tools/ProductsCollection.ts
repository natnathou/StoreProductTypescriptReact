import { SorterCollection } from './SorterCollection';
import { Product } from '../actions';

export type ProductProriety =
	| 'title'
	| 'picture'
	| 'description'
	| 'price'
	| 'id'
	| 'date';

export class ProductsCollection extends SorterCollection {
	static create(data: Product[]): ProductsCollection {
		return new ProductsCollection(data);
	}

	constructor(public data: Product[]) {
		super();
	}

	compare(index: number, propriety: ProductProriety): boolean {
		if (propriety === 'price' || propriety === 'id') {
			if (this.data[index + 1][propriety] < this.data[index][propriety]) {
				return true;
			}
		} else if (propriety === 'date') {
			if (
				new Date(this.data[index + 1][propriety]) <
				new Date(this.data[index][propriety])
			) {
				return true;
			}
		} else {
			if (
				this.data[index + 1][propriety].toLowerCase() <
				this.data[index][propriety].toLowerCase()
			) {
				return true;
			}
		}

		return false;
	}
	swap(index: number): void {
		let leftSide = this.data[index];
		this.data[index] = this.data[index + 1];
		this.data[index + 1] = leftSide;
	}
}
