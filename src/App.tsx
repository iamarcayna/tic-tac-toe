import { useState } from "react";
import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Scoreboard } from "./components/Scoreboard";
import { ResetButton } from "./components/ResetButton";
import { WinnerModal } from "./components/WinnerModal";

function App() {
  const WIN_CONDITION: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [xPlayer, setXplayer] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [scores, setScores] = useState({ scoreOne: 0, scoreTwo: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [playerNames, setPlayerNames] = useState({
    playerOne: "Player 1",
    playerTwo: "Player 2",
  });

  const changeName = (playerValue: string, playerName: string) => {
    if (playerName === "Player 1") {
      let { playerOne } = playerNames;
      playerOne = playerValue;
      setPlayerNames({ ...playerNames, playerOne });
    } else {
      let { playerTwo } = playerNames;
      playerTwo = playerValue;
      setPlayerNames({ ...playerNames, playerTwo });
    }
  };

  const handleBoxClicked = (boxIndex: number) => {
    const updatedBoard: string[] = board.map((value: string, index: number) => {
      if (boxIndex === index) {
        return xPlayer === true ? "X" : "O";
      }
      return value;
    });
    setBoard(updatedBoard);
    if (hasWinner(updatedBoard)) {
      updateScore(xPlayer === true ? "X" : "O");
    }
    setXplayer(!xPlayer);
  };

  const hasWinner = (board: string[]) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        setWinner(board[x]);
        return true;
      }
    }
    return false;
  };

  const updateScore = (winner: string) => {
    if (winner === "X") {
      let { scoreOne } = scores;
      scoreOne += 1;
      setScores({ ...scores, scoreOne });
    } else {
      let { scoreTwo: oScore } = scores;
      oScore += 1;
      setScores({ ...scores, scoreTwo: oScore });
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setXplayer(true);
    setBoard(Array(9).fill(""));
  };

  return (
    <div className="App">
      <h1 className="title">
        <span>Tic</span>-Tac-<span>Toe</span>
      </h1>
      {gameOver && (
        <WinnerModal
          winner={winner}
          resetGame={resetGame}
          playerNames={playerNames}
        />
      )}
      <Scoreboard
        scores={scores}
        xPlayer={xPlayer}
        changeName={changeName}
        playerNames={playerNames}
      />
      <Board board={board} onBoxClick={handleBoxClicked} />
      <ResetButton resetGame={resetGame} />
    </div>
  );
}

export default App;
