import { TabletCellProps } from "./types";
import useStyles from "./styles";

const TabletCell = ({ icon, value, ...props }: TabletCellProps) => {
  const classes = useStyles(props);
  const handleOnClick = () => {};
  
  return (
    <div onClick={handleOnClick} className={classes.cell}>
      {value}
    </div>
  );
};

export default TabletCell;
