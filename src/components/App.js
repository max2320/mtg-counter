import React from 'react';

import './App.css';

import Header from './Header';
import TeamList from './TeamList';
import Match from './Match';
import PlayerList from './PlayerList';
import MatchType from './MatchType';
import MatchSort from './MatchSort';
import MatchRoundWinner from './MatchRoundWinner';
import MatchLog from './MatchLog';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props)=>(
  <Router>
    <div className="App">
      <Header />

      <div className="App-container">
        <Switch>
          <Route path="/" exact>
            <Match />
          </Route>

          <Route path="/match/selection">
            <MatchType />
          </Route>

          <Route path="/match/log">
            <MatchLog />
          </Route>

          <Route path="/match/round_winner">
            <MatchRoundWinner />
          </Route>

          <Route path="/match/sort">
            <MatchSort />
          </Route>

          <Route path="/players/edit">
            <PlayerList />
          </Route>

          <Route path="/teams/edit">
            <TeamList />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
