import React from "react";

interface ResetButtonProps {
  resetGame: () => void;
}

export const ResetButton = ({ resetGame }: ResetButtonProps) => {
  return (
    <button className="reset-btn" onClick={resetGame}>
      Reset
    </button>
  );
};
