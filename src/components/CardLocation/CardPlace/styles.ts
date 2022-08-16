import { createUseStyles } from "react-jss";
import { CardPlaceProps } from "../CardPlace/types";

export default createUseStyles({
  place: {
    marginRight: "10px",
    width: "40px",
    height: "40px",
    border: "1px solid #333",
    borderRadius: "100%",
    backgroundColor: (props: CardPlaceProps) => (props ? props.color : "#fff"),
  },
});
