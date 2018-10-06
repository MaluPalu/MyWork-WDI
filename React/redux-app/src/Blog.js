import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addPost } from './actions';
import { bindActionCreators } from 'redux';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      newPostTitle: '',
      newPostBody: '',
      newPostAuthor: ''
    }
    this.handleAddPost = this.handleAddPost.bind(this)
  }

  handleAddPost (e) {
    let newPost = {
      // Blog component state (not global state)
      title: this.state.newPostTitle,
      author: this.state.newPostAuthor,
      body: this.state.newPostBody
    }
    this.props.addPost(newPost);

    // Blog component state
    this.setState({
      newPostTitle: '',
      newPostAuthor: '',
      newPostBody: ''
    })
  }

  render() {
    return (
    <div>
      {
        this.props.allPosts.map((post, i) => {
          return (
            <div key={ post.title }>
              <h1>{post.title}</h1>
              <h2>{post.author}</h2>
              <p>{post.body}</p>
            </div>
          )
        })
      }
      <div>
        <h1>Add Post</h1>
        <input
          placeholder="Enter Post Title"
          value={ this.state.newPostTitle }
          onChange={ (e) => this.setState({ newPostTitle: e.target.value }) } />
        <input
          placeholder="Enter Post Author"
          value={ this.state.newPostAuthor }
          onChange={ (e) => this.setState({ newPostAuthor: e.target.value }) } />
        <br />
        <textarea
          placeholder="Enter Post Body"
          value={ this.state.newPostBody }
          onChange={ (e) => this.setState({ newPostBody: e.target.value }) }
        />
        <br />
        <button onClick={(e) => { this.handleAddPost(e) } }>Add Post</button>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allPosts: state.allPosts
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addPost // es6 syntax knows this has a value of 'addPost'. Looks like ({ addPost: addPost })
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
