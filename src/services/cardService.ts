import Card from "../entities/ICardEntity";
import IGameState from "../entities/IGameState";

export class CardService {
  static shuffleCards(cards: Card[]): Card[] {
    return cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  static incrementScore(state: IGameState): IGameState {
    return { ...state, score: state.score + 1 };
  }
  
  static resetScoreAndShuffle(state: IGameState): IGameState{
    return {...state,score: 0 ,cards: CardService.shuffleCards(state.cards)}
  }
}
