import React, { Component } from 'react';

import Reddit from './Reddit';
import Rss from './Rss';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Rss name="Independent" url="https://www.independent.ie/breaking-news/irish-news/?service=Rss" />
        <Rss name="TheJournal" url="https://www.thejournal.ie/feed/" />
        <Rss name="SiliconRepublic" url="https://www.siliconrepublic.com/category/careers/feed" />
        <Reddit subreddit="ireland" />
        <Reddit subreddit="nba" />
        <Reddit subreddit="europe" />
        <Reddit subreddit="programming" />
      </div>
    );
  }
}

export default App;
