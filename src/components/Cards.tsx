import React, { useEffect, useState } from "react";
import IGameState from "../entities/IGameState";
import { CardService } from "../services/cardService";
import ScoreBoard from "./ScoreBoard";
import CardComponent from "./Card";
import { CardUseCase } from "../useCases/cardUseCase";

const initalGameState: IGameState = {
  cards: [
    {
      id: 0,
      cardImage: "/deergirl2.png",
      cardName: "DeerGirl2",
      isClicked: false,
    },
    {
      id: 1,
      cardImage: "/shikano1.png",
      cardName: "deergirl1",
      isClicked: false,
    },
    {
      id: 2,
      cardImage: "/deergirl3.png",
      cardName: "deergirl3",
      isClicked: false,
    },
    {
      id: 3,
      cardImage: "/deergirl4.png",
      cardName: "deergirl4",
      isClicked: false,
    },
    {
      id: 4,
      cardImage: "/deergirl5.png",
      cardName: "deergirl5",
      isClicked: false,
    },
    {
      id: 5,
      cardImage: "/blondgirl1.png",
      cardName: "blondgirl1",
      isClicked: false,
    },
    {
      id: 6,
      cardImage: "/blondgirl2.png",
      cardName: "blondgirl2",
      isClicked: false,
    },
    {
      id: 7,
      cardImage: "/blodengirl3.png",
      cardName: "blondgirl3",
      isClicked: false,
    },
  ],
  score:0,
  highestScore:0,
};
const Cards: React.FC = () =>{
  const [gameState , setGameState] = useState<IGameState>(initalGameState)
  useEffect(()=>{
    const newState: IGameState ={
      ...gameState,
      cards: CardService.shuffleCards(gameState.cards),
        
    }
    if (newState.score > newState.highestScore) {
      newState.highestScore = newState.score
    }
    setGameState(newState)
  },[gameState.score])
  const handleClick = (clickedCardName:string) =>{
    setGameState(CardUseCase.handleCardClick(gameState,clickedCardName))
  }
  return (
    <>
      <ScoreBoard gameState={gameState}/>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-3 gap-3">
          {gameState.cards.map(card =>(
          <CardComponent key={card.id} card={card} onClick={handleClick}/>
          ))}
          </div>
        </div>
      </>
  )
}
export default Cards
