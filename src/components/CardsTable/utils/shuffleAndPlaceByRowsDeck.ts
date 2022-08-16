import { CardLocationProps } from "../../CardLocation/types";

const shuffleAndPlaceByRowsDeck = (
  cards: CardLocationProps[],
  rows: number
): CardLocationProps[][] => {
  // shuffle deck
  const shuffledDeck = [...cards];
  let cardIndex = 0;
  while (cardIndex < shuffledDeck.length) {
    const randIndex = Math.floor(Math.random() * shuffledDeck.length);
    [shuffledDeck[cardIndex], shuffledDeck[randIndex]] = [
      shuffledDeck[randIndex],
      shuffledDeck[cardIndex],
    ];
    cardIndex++;
  }

  const table: CardLocationProps[][] = [];
  // put cards by rows
  let row = 0;
  for (const card of shuffledDeck) {
    if (row <= table.length) {
      table.push([]);
    }
    table[row++].push(card);
    if (row === rows) {
      row = 0;
    }
  }

  return table;
};
export default shuffleAndPlaceByRowsDeck;
