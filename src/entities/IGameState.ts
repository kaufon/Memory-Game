import Card from "./ICardEntity";

export default interface IGameState{
  cards: Card[]
  score: number
  highestScore: number
}
