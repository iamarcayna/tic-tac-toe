import React from "react";

interface WinnerModalProps {
  winner: string;
  resetGame: () => void;
  playerNames: { playerOne: string; playerTwo: string };
}

export const WinnerModal = ({
  winner,
  resetGame,
  playerNames,
}: WinnerModalProps) => {
  let { playerOne, playerTwo } = playerNames;
  return (
    <div className="winner-modal" onMouseDown={resetGame}>
      <h2>{winner === "X" ? `${playerOne} won!` : `${playerTwo} won!`}</h2>
    </div>
  );
};
