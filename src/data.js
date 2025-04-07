import Batista from "./assets/batista.webp";
import Brian from "./assets/brian.webp";
import Debra from "./assets/debra.webp";
import Dexter from "./assets/dexter.webp";
import Doakes from "./assets/doakes.webp";
import Harry from "./assets/harry.webp";
import LaGuerta from "./assets/laGuerta.webp";
import Lila from "./assets/lila.webp";
import Lundy from "./assets/lundy.webp";
import Masuka from "./assets/masuka.webp";
import Matthews from "./assets/matthews.webp";
import Prado from "./assets/prado.webp";
import Quinn from "./assets/quinn.webp";
import Rita from "./assets/rita.webp";
import Trinity from "./assets/Trinity.webp";
import Lumen from "./assets/lumen.webp";

export const data = [
  {
    name: "Angel Batista",
    img: Batista,
  },
  {
    name: "Brian Moser",
    img: Brian,
  },
  {
    name: "Debra Morgan",
    img: Debra,
  },
  {
    name: "Dexter Morgan",
    img: Dexter,
  },
  {
    name: "James Doakes",
    img: Doakes,
  },
  {
    name: "Harry Morgan",
    img: Harry,
  },
  {
    name: "Lila West",
    img: Lila,
  },
  {
    name: "Maria LaGuerta",
    img: LaGuerta,
  },
  {
    name: "Frank Lundy",
    img: Lundy,
  },
  {
    name: "Vince Masuka",
    img: Masuka,
  },
  {
    name: "Thomas Matthews",
    img: Matthews,
  },
  {
    name: "Miguel Prado",
    img: Prado,
  },
  {
    name: "Joey Quinn",
    img: Quinn,
  },
  {
    name: "Rita Morgan",
    img: Rita,
  },
  {
    name: "Arthur Mitchell",
    img: Trinity,
  },
  {
    name: "Lumen Pierce",
    img: Lumen,
  },
];

export const getNewCard = (currentCards) => {
  let newCard;
  while (!newCard) {
    const element = data[Math.floor(Math.random() * data.length)];
    if (!currentCards.find((c) => c.name === element.name)) {
      newCard = element;
    }
  }
  return newCard;
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
