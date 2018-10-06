import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import PostsContainer from '../containers/PostsContainer'

module.exports = (
  <Route path='/' component={App}>
   <Route path='/posts' component={PostsContainer}/>
  </Route>
)
