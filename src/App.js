import React, { Component } from 'react';

import Reddit from './Reddit';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Reddit subreddit="nba" />
        <Reddit subreddit="europe" />
      </div>
    );
  }
}

export default App;
