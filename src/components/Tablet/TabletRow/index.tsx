import { useMemo } from "react";
import TabletCell from "../TabletCell";
import { TabletCellProps } from "../TabletCell/types";
import { TabletRowProps } from "./types";
import useStyles from "./styles";

const TabletRow = ({
  items,
  label,
  noBorders = false,
  length = 10,
}: TabletRowProps) => {
  const classes = useStyles();
  const columns = useMemo(() => {
    const result: TabletCellProps[] = [];
    const _items = items ? items : [];
    for (let i = 0; i < length; i++) {
      const item = _items.find(({ index }) => index === i);
      if (item) {
        result.push({ value: item.content?.value });
      } else {
        result.push({ value: !items ? i.toString() : undefined });
      }
    }
    return result;
  }, [length, items]);

  return (
    <div className={classes.wrapper}>
      <span className={classes.label}>{label}</span>{" "}
      <div className={classes.row}>
        {columns.map(({ icon, value }) => (
          <TabletCell noBorders={noBorders} icon={icon} value={value} />
        ))}
      </div>
    </div>
  );
};

export default TabletRow;
