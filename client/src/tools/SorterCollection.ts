import { Product } from '../actions';

export abstract class SorterCollection {
	abstract data: Product[];
	abstract compare(index: number, propriety: string): boolean;
	abstract swap(index: number): void;

	sort(propriety: string): void {
		let length = this.data.length;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, propriety)) {
					this.swap(j);
				}
			}
		}
	}
}
