import { CardActionProps } from "./types";
import useStyle from "./styles";

const CardAction = (props: CardActionProps) => {
  const { text, type } = props;
  const classes = useStyle();

  const handleActionClick = () => {
    console.log({ type });
  };

  return (
    <div className={classes.action}>
      <button onClick={handleActionClick}>{text}</button>
    </div>
  );
};

export default CardAction;
