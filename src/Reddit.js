import React, { Component } from 'react';
import axios from 'axios';
import './Reddit.css';

class Reddit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="Reddit">
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}><a href={post.url}>{post.title}</a></li>
          )}
        </ul>
      </div>
    );
  }
}

export default Reddit;
