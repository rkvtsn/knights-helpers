import { useEffect, useState } from "react";
import CardLocation from "../CardLocation";
import { CARDS, CARDS_ROWS } from "./constants";
import shuffleAndPlaceByRowsDeck from "./utils/shuffleAndPlaceByRowsDeck";
import useStyles from "./styles";
import { CardsTableProps } from "./types";
import { CardLocationProps } from "../CardLocation/types";

const CardsTable = ({
  cards = CARDS,
  cardsRows = CARDS_ROWS,
}: CardsTableProps) => {
  const classes = useStyles();

  const [rows, setRows] = useState<CardLocationProps[][]>([]);

  useEffect(() => {
    setRows(shuffleAndPlaceByRowsDeck(cards, cardsRows));
  }, [setRows, cards, cardsRows]);

  return (
    <div className={classes.table}>
      {rows.map((cardsRow, rowNumber) => (
        <div key={rowNumber} className={classes.row}>
          {cardsRow.map((card) => (
            <div key={card.id} className={classes.cell}>
              <CardLocation
                actions={card.actions}
                description={card.description}
                id={card.id}
                places={card.places}
                title={card.title}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardsTable;
