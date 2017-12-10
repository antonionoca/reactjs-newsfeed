import React from 'react';
import ReactDOM from 'react-dom';
import Rss from './Rss';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rss />, div);
});
