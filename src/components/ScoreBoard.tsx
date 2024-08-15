import React from "react";
import IGameState from "../entities/IGameState";

interface ScoreBoardProps {
  gameState: IGameState;
}
const ScoreBoard: React.FC<ScoreBoardProps> = ({ gameState }) => (
  <div className="flex justify-between bg-black w-full h-24 text-white items-center">
    <h1 className="text-2xl p-5 bg-gray-800 border-4 border-gray-900 font-bold italic rounded-full text-gray-300">
      Streak: {gameState.score}
    </h1>
    <h1 className="text-2xl p-5 bg-gray-800 border-4 border-gray-900 font-bold italic rounded-full text-gray-300">
      Top Points: {gameState.highestScore}
    </h1>
  </div>
);
export default ScoreBoard;
