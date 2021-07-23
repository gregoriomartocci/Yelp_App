import "./App.css";
import Main from "./Components/Main/Main";
import { Route, Router, Switch } from "react-router-dom";
import History from "./Components/History/History";

function App() {
  return (
    <Router history={History}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
