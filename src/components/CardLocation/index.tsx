import CardAction from "./CardAction";
import CardPlaces from "./CardPlaces";
import { CardLocationProps } from "./types";
import useStyle from "./styles";

const CardLocation = (props: CardLocationProps) => {
  const { title, description, actions, places } = props;
  const classes = useStyle();

  return (
    <div className={classes.location}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.actions}>
        {actions.map((action, index) => (
          <CardAction {...action} key={index} />
        ))}
      </div>
      <CardPlaces places={places} />
    </div>
  );
};

export default CardLocation;
