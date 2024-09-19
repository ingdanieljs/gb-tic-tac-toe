import { TURNS } from "../constants";
import { ArrowPath } from "./icons/ArrowPath";

export function Buttons({ newGame, restartGame, currentTurn }) {
  const currentText =
    currentTurn === TURNS.iddle ? "New Game" : `Turn ${currentTurn}`;

  return (
    <section className="flex gap-3">
      <button
        disabled={currentTurn !== TURNS.iddle}
        onClick={newGame}
        className="board-btn"
      >
        {currentText}
      </button>
      <button onClick={restartGame} className="restart-btn">
        <ArrowPath />
      </button>
    </section>
  );
}
