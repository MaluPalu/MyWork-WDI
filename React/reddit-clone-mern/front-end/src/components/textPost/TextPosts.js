import React, {Component} from 'react'
import TextPost from './TextPost'

class TextPosts extends Component {
  render(){
    let todos = this.props.textposts.map( (post) => {
      return (
        <TextPost
          key={post._id}
          todo={post}/>
      )
    })
    return(
      <div className="textPosts">
        {posts}
      </div>
    )
  }
}

export default TextPosts
