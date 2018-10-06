import React, { Component } from 'react';
import './TextPost.css';

class TextPost extends Component {
  static all(){
   let request = TextPost.get("/api/posts")
   return request
 }
  render() {
    return (
      <div className="TextPost">
        <p className="TextPost-content">
          TextPost content
        </p>
      </div>
    );
  }
}

export default TextPost;
