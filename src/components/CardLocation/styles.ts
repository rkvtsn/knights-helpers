import { createUseStyles } from "react-jss";

export default createUseStyles({
  location: {
    width: "220px",
    height: "200px",
    border: "1px solid #eee",
    padding: "7px",
    margin: "8px",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      borderColor: "#ccc",
      boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, .2)",
    },
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    borderTop: "1px solid #ccc",
    margin: "8px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.8em",
  },
});
