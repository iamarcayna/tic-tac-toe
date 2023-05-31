import React from "react";

interface BoxProps {
  value: string;
  onBoxClick: () => void;
}

export const Box = ({ value, onBoxClick }: BoxProps) => {
  return (
    <button
      className={value === "X" ? "box playerX" : "box playerO"}
      onClick={onBoxClick}
    >
      {value}
    </button>
  );
};
