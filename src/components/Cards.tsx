import { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([
    {
      id: 0,
      cardImage: "../../public/deergirl2.png",
      cardName: "DeerGirl2",
      isClicked: false,
    },
    {
      id: 1,
      cardImage: "../../public/shikano1.png",
      cardName: "deergirl1",
      isClicked: false,
    },
    {
      id: 2,
      cardImage: "../../public/deergirl3.png",
      cardName: "deergirl3",
      isClicked: false,
    },
    {
      id: 3,
      cardImage: "../../public/deergirl4.png",
      cardName: "deergirl4",
      isClicked: false,
    },
    {
      id: 4,
      cardImage: "../../public/deergirl5.png",
      cardName: "deergirl5",
      isClicked: false,
    },
    {
      id: 5,
      cardImage: "../../public/blondgirl1.png",
      cardName: "blondgirl1",
      isClicked: false,
    },
    {
      id: 6,
      cardImage: "../../public/blondgirl2.png",
      cardName: "blondgirl2",
      isClicked: false,
    },
    {
      id: 7,
      cardImage: "../../public/blodengirl3.png",
      cardName: "blondgirl3",
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
      setHighestScore(score);
    }
  }, [score]);

  return (
    <>
      <div className="flex justify-between fixed border-black bg-white border-2 w-full h-10">
        <h2>esse e os pontos {score}</h2>
        <h2>seu maior ponto foi {highestScore}</h2>
      </div>

      <div className="space-y-2 flex flex-row flex-1 justify-center items-center gap-5">
        {cards.map((card) => (
          <h1 key={card.cardName}>
            <button onClick={clickCard} name={card.cardName}>
              <img src={card.cardImage} alt={card.cardName} />
            </button>
          </h1>
        ))}
      </div>

    </>
  );
}
export default Cards;
