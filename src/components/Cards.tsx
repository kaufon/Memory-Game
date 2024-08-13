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
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const clickCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    const cardClicked = cards.find(
      (card) => card.cardName === event.currentTarget.name,
    );
    if (cardClicked?.isClicked === true) {
      setScore(0);
      shuffleCards();
      return;
    }
    const updatedCards = cards.map((card) =>
      card.cardName === cardClicked?.cardName
        ? { ...card, isClicked: true }
        : { ...card, isClicked: false },
    );
    setCards(updatedCards);
    setScore((score) => score + 1);
  };
  const shuffleCards = () => {
    const shuffledCards = [...cards]
      .sort(() => Math.random() - 5)
      .map((cards) => ({ ...cards }));

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
    if (score >= highestScore) {
      setHighestScore(score)
      
    }
  }, [score]);

  return (
    <>
      {cards.map((card) => (
        <h1 key={card.cardName}>
          <button onClick={clickCard} name={card.cardName}>
            {card.cardName}
          </button>
        </h1>
      ))}
      <h2>esse e os pontos {score}</h2>
      <h2>seu maior ponto foi {highestScore}</h2>
    </>
  );
}
export default Cards;
