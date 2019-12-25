import React from 'react';
import './App.css';
import Shows from './components/Shows/Shows';
import Details from './components/Details/Details';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route path="/details/:showId">
                      <Details />
                  </Route>
                  <Route path="/">
                      <Shows />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
