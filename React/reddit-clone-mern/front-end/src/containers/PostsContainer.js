import React, {Component} from 'react'
import TextPost from '../components/textPost/TextPost'

class PostsContainer extends Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TextPostModel.all().then( (res) => {
      this.setState ({
        posts: res.data.textPosts,
        post: ''
      })
    })
  }
  render(){
    return (
      <div className="textPostsComponent">
        <TextPost
          posts={this.state.posts} />
      </div>
    )
  }
}

export default PostsContainer
