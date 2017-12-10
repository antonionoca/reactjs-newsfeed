import React, { Component } from 'react';

import Reddit from './Reddit';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Reddit subreddit="nba" />
        <Reddit subreddit="europe" />
        <Reddit subreddit="ireland" />
        <Reddit subreddit="programming" />
      </div>
    );
  }
}

export default App;
