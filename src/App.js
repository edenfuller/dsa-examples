import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home.js';
import BinarySearch from './components/BinarySearch.js';

import './App.css';

function App() {

  const [route, setRoute] = useState('home');

  return (
    <div className="App">
      <div id="inner" >

     <Router>

          <nav>
            <ul>
              <li>
                <Link className={route === "home" ? "selected" : ''} onClick={() => { setRoute('home'); }} to="/">Home</Link>
              </li>
              <li>
                <Link className={route === "binary-search" ? "selected" : ''} onClick={() => { setRoute('binary-search'); }} to="/binary-search">Binary Search</Link>
              </li>
            </ul>
          </nav>


          <Switch>

            <Route path="/binary-search">
              <BinarySearch setRoute={setRoute} />
            </Route>
            <Route path="*">
              <Home setRoute={setRoute} />
            </Route>
          </Switch>
        </Router>
        </div>
    </div>
  );
}

export default App;
