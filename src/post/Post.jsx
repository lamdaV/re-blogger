import React, { Component } from "react";
import Markdown from "react-markdown";

class Post extends Component {
  render() {
    return (
      <div>
        <Markdown source={this.props.content} />
      </div>
    )
  }
}

export default Post;
