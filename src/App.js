import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chal bech de sabkuch</h1>
        </header>
        <p className="App-intro">
          <LandingPage />
        </p>
      </div>
    );
  }
}

export default App;
