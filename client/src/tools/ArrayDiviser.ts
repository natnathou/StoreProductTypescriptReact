import { Product } from '../actions';
export class ArrayDiviser {
	constructor(private data: Product[], private diviser: number) {}

	public static organise(data: Product[], diviser: number): Product[][] {
		let newArray = new ArrayDiviser(data, diviser);
		return newArray.sort();
	}

	private sort(): Product[][] {
		const length = this.data.length;
		const allData: Product[][] = [];
		for (let i = 0; i < this.diviser; i++) {
			const newData: Product[] = [];
			for (
				let j = 0 + this.diviser * i;
				j < this.diviser * (i + 1) && j < length;
				j++
			) {
				newData.push(this.data[j]);
			}
			allData.push(newData);
		}

		return allData;
	}
}
