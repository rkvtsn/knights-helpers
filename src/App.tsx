import CardsTable from "./components/CardsTable";
import Tablet from "./components/Tablet";

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.table}>
        <CardsTable />
      </div>
      <div className={classes.tablet}>
        <Tablet />
      </div>
    </div>
  );
}

export default App;
