import { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([
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
    const shuffledCards = cards
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

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
      <div className="space-y-2">
        <div className="flex justify-between bg-black w-full h-24 text-white items-center">
          <h1 className="text-2xl p-5 bg-gray-800 border-4 border-gray-900 font-bold  italic   rounded-full text-gray-300 ">
            Streak: {score}
          </h1>
          <h1 className="text-2xl p-5 bg-gray-800 border-4 border-gray-900 font-bold  italic   rounded-full text-gray-300">
            Top Points: {highestScore}
          </h1>
        </div>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="grid grid-cols-3 gap-3  ">
            {cards.map((card) => (
              <button
                onClick={clickCard}
                name={card.cardName}
                key={card.cardName}
                className=" "
              >
                <img
                  src={card.cardImage}
                  alt={card.cardName}
                  className="w-64 h-56 rounded-full border-4 border-orange-950"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
