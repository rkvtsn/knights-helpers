import TabletRow from "./TabletRow";
import { Status, TabletProps } from "./types";

import useStyles from "./styles";

const POWER: Status[] = [];
const AGILITY: Status[] = [];
const WISDOM: Status[] = [];
const FAME: Status[] = [];

const Tablet = ({
  fame = FAME,
  power = POWER,
  agility = AGILITY,
  wisdom = WISDOM,
}: TabletProps) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <TabletRow noBorders length={12} />
        <TabletRow label="Fame" items={fame} length={12} />

        <div className={classes.skills}>
          <TabletRow label="Power" items={power} />
          <TabletRow label="Agility" items={agility} />
          <TabletRow label="Wisdom" items={wisdom} />
        </div>

        <TabletRow label="Energy" items={[]} length={12} />
      </div>
    </div>
  );
};

export default Tablet;
