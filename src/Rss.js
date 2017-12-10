import React, { Component } from 'react';
import axios from 'axios';
import './Rss.css';

class Rss extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`)
      .then(res => {

				const posts = [];

				[].forEach.call(res.request.responseXML.querySelectorAll('item'), function(item) {

					posts.push({
						id: item.querySelector('guid').textContent,
						url: item.querySelector('link').textContent,
						title: item.querySelector('title').textContent
					});

				});

				this.setState({ posts });
      })
			.catch(err => {
				console.log(err);
			});
  }

  render() {
    return (
      <div className="Rss">
        <h1>{`${this.props.name}`}</h1>
        <ul>
          {this.state.posts.map(post => 
						<li key={post.id}><a href={post.url}>{post.title}</a></li>
					)}
        </ul>
      </div>
    );
  }
}

export default Rss;
