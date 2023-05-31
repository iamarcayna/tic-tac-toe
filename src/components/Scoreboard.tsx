import React from "react";

interface ScoreboardProps {
  scores: { scoreOne: number; scoreTwo: number };
  xPlayer: boolean;
  changeName: (value: string, name: string) => void;
  playerNames: { playerOne: string; playerTwo: string };
}

export const Scoreboard = ({
  scores,
  xPlayer,
  changeName,
  playerNames,
}: ScoreboardProps) => {
  let { scoreOne, scoreTwo } = scores;
  let { playerOne, playerTwo } = playerNames;

  return (
    <div className="scoreboard">
      <div className={`player ${xPlayer ? "x-active" : "disabled"}`}>
        <input
          value={playerOne}
          name="Player 1"
          className="player-name"
          autoComplete="off"
          maxLength={10}
          onChange={(e) => changeName(e.target.value, e.target.name)}
        />
        <span className="x-score">{scoreOne}</span>
      </div>
      <h3>VS</h3>
      <div className={`player ${!xPlayer ? "o-active" : "disabled"}`}>
        <input
          value={playerTwo}
          name="Player 2"
          className="player-name"
          autoComplete="off"
          maxLength={10}
          onChange={(e) => changeName(e.target.value, e.target.name)}
        />
        <span className="o-score">{scoreTwo}</span>
      </div>
    </div>
  );
};
