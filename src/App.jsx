import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./views/Home";
import AboutPage from "./views/About";
import FourOhFour from "./views/404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="*" component={FourOhFour} />
      </Switch>
    </Router>
  );
};

export default App;
