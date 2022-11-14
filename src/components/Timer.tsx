import { FC, useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
	currentPlayer: Player | null;
	restart: () => void;
}

export const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
	const [blackTime, setBlackTime] = useState(300);
	const [whiteTime, setWhiteTime] = useState(300);
	const timer = useRef<null | ReturnType<typeof setInterval>>(null);

	useEffect(() => {
		startTimer();
	}, [currentPlayer]);

	function startTimer() {
		if (timer.current) {
			clearInterval(timer.current);
		}
		const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
		timer.current = setInterval(callback, 1000);
		if (blackTime === 0) {
			clearInterval(0);
		}
	}

	function decrementBlackTimer() {
		setBlackTime((prev) => prev - 1);
	}
	function decrementWhiteTimer() {
		setWhiteTime((prev) => prev - 1);
	}

	const handleRestart = () => {
		setWhiteTime(300);
		setBlackTime(300);
		restart();
	};

	return (
		<div className="timer">
			<h2 className="title">Текущий игрок: {currentPlayer?.color === Colors.BLACK ? 'черные' : 'белые'}</h2>
			<button onClick={handleRestart}>Restart game</button>
			<h2>Черные: {blackTime}c</h2>
			<h2>Белые: {whiteTime}c</h2>
		</div>
	);
};
