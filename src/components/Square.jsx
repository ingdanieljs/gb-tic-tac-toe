export function Square({ children, updateBoard, index, isDisabled, isWinner }) {
  const handleClick = () => {
    if (isDisabled) return;
    updateBoard(index);
  };

  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`square font-fredoka-one ${isWinner ? "winner" : ""}`}
    >
      {children}
    </button>
  );
}
