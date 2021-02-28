import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App; 
