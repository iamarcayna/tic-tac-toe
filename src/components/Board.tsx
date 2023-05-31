import { Box } from "./Box";
import React from "react";

interface BoardProps {
  board: string[];
  onBoxClick: (index: number) => void;
}
export const Board = ({ board, onBoxClick }: BoardProps) => {
  return (
    <div className="board">
      {board.map((item: string, index: number) => {
        return (
          <Box
            value={item}
            onBoxClick={() => item === "" && onBoxClick(index)}
            key={index}
          />
        );
      })}
    </div>
  );
};
