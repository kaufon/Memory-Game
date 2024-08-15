import React from "react";
import ICard from "../entities/ICardEntity";

interface CardProps {
  card: ICard;
  onClick: (name: string) => void;
}
const CardComponent: React.FC<CardProps> = ({ card, onClick }) => (
  <button
    onClick={() => onClick(card.cardName)}
    name={card.cardName}
    key={card.id}
  >
    <img
      src={card.cardImage}
      alt={card.cardName}
      className="w-64 h-56 rounded-full border-4 border-orange-950"
    />
  </button>
);
export default CardComponent
