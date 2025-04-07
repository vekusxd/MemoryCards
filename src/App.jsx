import { data, getNewCard, shuffle } from "./data";
import Card from "./Card";
import BloodBottom from "./assets/blood-bottom.png";
import { useEffect, useState } from "react";
import appStyles from "./App.module.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maximumScore, setMaximumScore] = useState(0);

  useEffect(() => {
    setCards([...data].slice(0, 12));
  }, []);

  const handleClick = (cardTitle) => {
    const item = cards.find((c) => c.name === cardTitle);
    if (!selectedCards.find((e) => e === item.name)) {
      setSelectedCards([...selectedCards, item.name]);
      setCurrentScore(currentScore + 1);

      const index = cards.findIndex((c) => c.name === cardTitle);

      const newCard = getNewCard(cards);
      const newCards = [...cards];
      newCards[index] = newCard;
      setCards(shuffle(newCards));
    } else {
      setSelectedCards([]);
      if (currentScore > maximumScore) {
        setMaximumScore(currentScore);
      }
      setCurrentScore(0);
    }
  };

  return (
    <div>
      <div className="flex justify-between text-red-600">
        <div className="flex flex-col">
          <h1 className={"mt-3 ml-3 text-5xl  z-60"}>Dexter Memory Game</h1>
          <p className={"mt-5 ml-3   z-60"}>
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </div>
        <div className="flex flex-col mr-2 z-60 text-red-600">
          <p>Score: {currentScore}</p>
          <p>Best score: {maximumScore}</p>
        </div>
      </div>

      <div
        className={`flex gap-4 flex-wrap justify-between mx-3 mt-7 z-40 ${appStyles.cardGrid}`}
      >
        {cards.map((e) => (
          <Card
            key={e.name}
            title={e.name}
            imgSrc={e.img}
            handleClick={() => {
              handleClick(e.name);
            }}
          />
        ))}
      </div>
      <img
        src={BloodBottom}
        alt="bloodSpatters"
        className={"fixed bottom-0 left-0  z-10 backdrop-opacity-5"}
      />
    </div>
  );
};

export default App;
