export function Scores({ winners }) {
  return (
    <section className="winners-counter">
      <section className="winner-box bg-blue">
        <span>Player X</span>
        <span className="font-bold text-3xl font-fredoka-one">
          {winners.playerX}
        </span>
      </section>
      <section className="winner-box bg-gray">
        <span>Draws</span>
        <span className="font-bold text-3xl font-fredoka-one">  
          {winners.draws}
        </span>
      </section>
      <section className="winner-box bg-agua">
        <span>Player O</span>
        <span className="font-bold text-3xl font-fredoka-one">
          {winners.playerO}
        </span>
      </section>
    </section>
  );
}
