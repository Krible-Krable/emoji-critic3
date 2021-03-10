import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from './about-us/AboutUs';
import PageNotFound from './PageNotFound';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/information-zone">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 
