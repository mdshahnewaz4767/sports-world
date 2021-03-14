import League from './components/League/League';
import './App.css';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <League></League>
          </Route>
          <Route path="/home">
            <League></League>
          </Route>
          <Route path="/league/:leagueId">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="/*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
