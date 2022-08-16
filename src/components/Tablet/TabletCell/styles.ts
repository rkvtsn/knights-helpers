import { TabletCellProps } from "./types";
import { createUseStyles } from "react-jss";

const cellSize = "20px";

const color = {
  border: "#000",
};

export default createUseStyles<"cell", TabletCellProps>({
  cell: {
    display: "block",
    width: cellSize,
    height: cellSize,
    border: ({ noBorders }) => (noBorders ? "" : `1px solid ${color.border}`),
    textAlign: "center",
    verticalAlign: "middle",
  },
});
