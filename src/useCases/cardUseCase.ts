import IGameState from "../entities/IGameState";
import { CardService } from "../services/cardService";


export class CardUseCase{
  static handleCardClick(state: IGameState , clickedCardName: string): IGameState{
    const cardClicked = state.cards.find(card=> card.cardName === clickedCardName)
    if (!cardClicked || cardClicked.isClicked) {
      return CardService.resetScoreAndShuffle(state)
    }
    const updatedCards = state.cards.map(card => card.cardName === clickedCardName ? {...card , isClicked:true} : {...card , isClicked:false})
    console.log(state.score)
    return {...state,cards: updatedCards,score: CardService.incrementScore(state).score}
  }

}
