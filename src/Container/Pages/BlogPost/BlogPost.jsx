import React, { Component, Fragment } from "react";
import Post from "./Post";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          post: json
        })
      })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
            {this.state.post.map(post => (
            <Post
                key={post.id}
                title={post.title}
                desc={post.body}
            />
            ))}
        </div>
      </Fragment>
    )
  }
}

export default BlogPost;
