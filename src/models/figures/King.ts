import { Figure, FigureNames } from './Figure';
import { Cell } from '../Cell';
import { Colors } from '../Colors';
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KING;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false;
		}

		const isHorizontalMove = (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && target.y === this.cell.y;
		const isVerticalMove = (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) && target.x === this.cell.x;
		const isDiagonalMove =
			(target.x === this.cell.x + 1 && target.y === this.cell.y + 1) ||
			(target.x === this.cell.x - 1 && target.y === this.cell.y - 1) ||
			(target.x === this.cell.x + 1 && target.y === this.cell.y - 1) ||
			(target.x === this.cell.x - 1 && target.y === this.cell.y + 1);

		if (isHorizontalMove || isVerticalMove || isDiagonalMove) return true;

		return false;
	}
}
