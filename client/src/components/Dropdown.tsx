import React, {
	useState,
	useRef,
	useEffect,
	MouseEvent as MouseEventReact
} from 'react';
import { connect } from 'react-redux';
import { sorter } from '../actions';
import { ProductProriety } from '../tools/ProductsCollection';
import { StoreState } from '../reducers';
import { StateSorter } from '../reducers/sorterReducer';

interface AppProps {
	sorterStatus: StateSorter;
	sorter: Function;
}

export const _Dropdown = ({ sorterStatus, sorter }: AppProps) => {
	const [isDisplay, setIsDisplay] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onBodyClick = (event: MouseEvent) => {
			if (ref.current) {
				if (ref.current.contains(event.target as Node)) {
					return;
				} else {
					return setIsDisplay(false);
				}
			}
		};
		document.body.addEventListener('click', onBodyClick);
		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	});

	const handleClick = () => {
		setIsDisplay(!isDisplay);
	};

	const soterClick = (event: MouseEventReact<HTMLDivElement>) => {
		sorter(
			event.currentTarget.getAttribute('data-value') as ProductProriety
		);
	};

	const sorterPossibility = ['title', 'price'];

	const sorterRender = () => {
		return sorterPossibility.map((data, index) => {
			if (data !== sorterStatus) {
				return (
					<div
						className='item'
						key={index}
						data-value={data}
						onClick={soterClick}
					>
						{data.toUpperCase()}
					</div>
				);
			} else {
				return null;
			}
		});
	};

	return (
		<div>
			<div
				className={`ui selection dropdown ${
					isDisplay ? `visible active` : ``
				}`}
				ref={ref}
				onClick={handleClick}
			>
				<i className='dropdown icon'></i>
				<div className='text'>{sorterStatus.toUpperCase()}</div>
				<div
					className={`menu ${isDisplay ? `visible transition` : ``}`}
				>
					{sorterRender()}
				</div>
			</div>
			{sorterStatus !== 'Sort By' ? (
				<i
					className='close icon'
					style={{ marginLeft: `5px` }}
					onClick={() => sorter('Sort By')}
				></i>
			) : null}
		</div>
	);
};

const mapStateToProps = ({
	sorterStatus
}: StoreState): { sorterStatus: StateSorter } => {
	return { sorterStatus };
};

export const Dropdown = connect(mapStateToProps, { sorter })(_Dropdown);
