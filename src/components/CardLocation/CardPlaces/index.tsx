import CardPlace from "../CardPlace";
import useStyle from "./styles";
import { CardPlacesProps } from "./types";

const CardPlaces = ({ places }: CardPlacesProps) => {
  const classes = useStyle();
  const placeHolder = places?.length
    ? places.map((place, index) => (
        <CardPlace color={place?.color} key={index} />
      ))
    : null;

  return <div className={classes.places}>{placeHolder}</div>;
};

export default CardPlaces;
