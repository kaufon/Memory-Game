import { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([
    { id: 0, cardImage: "railsurl", cardName: "RoR", isClicked: false },
    {
      id: 1,
      cardImage: "javascripturl",
      cardName: "JavaScript",
      isClicked: false,
    },
  ]);
  const [highScore, setHighScore] = useState(0);
  const clickCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    const cardClicked = cards.find(
      (card) => card.cardName === event.currentTarget.name,
    );
    if (cardClicked?.isClicked === true) {
      setHighScore(0);
      return;
    }
    const updatedCards = cards.map(
      (card) =>
        card.cardName === cardClicked?.cardName
          ? { ...card, isClicked: true }
          : { ...card, isClicked: false },
      console.log(cards),
    );
    setCards(updatedCards);
    setHighScore((score) => score + 1);
  };
  
  return (
    <>
      {cards.map((card) => (
        <h1 key={card.cardName}>
          <button onClick={clickCard} name={card.cardName}>
            {card.cardName}
          </button>
        </h1>
      ))}
      <h2>esse e os pontos {highScore}</h2>
    </>
  );
}
export default Cards;
