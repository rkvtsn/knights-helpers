import { CardPlaceProps } from "./types";

import useStyles from "./styles";

const CardPlace = (props: CardPlaceProps) => {
  const classes = useStyles(props);
  return <div className={classes.place}></div>;
};

export default CardPlace;
