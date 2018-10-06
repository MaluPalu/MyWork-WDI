import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PostsContainer from './containers/PostsContainer';
import PostContainer from './containers/PostContainer';
// import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'




ReactDOM.render((
 <Router history={hashHistory}>
   <Route path="/" component={App}>
     <Route path="/posts" component={PostsContainer}/>
       <Route path="/posts/:post_id" component={PostContainer}/>
   </Route>
 </Router>
),document.body)
