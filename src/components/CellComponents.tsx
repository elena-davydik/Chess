import { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
	return (
		<div
			className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
			onClick={() => click(cell)}
			style={{ background: cell.available && cell.figure ? 'rgb(80, 255, 80)' : '' }}>
			{cell.available && !cell.figure && <div className="available" />}
			{cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.name} />}
		</div>
	);
};