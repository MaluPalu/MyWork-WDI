import { combineReducers } from 'redux';
import allPostsReducer from './allPosts_reducer.js';

const rootReducer = combineReducers({
   allPosts: allPostsReducer
  // reducer 2
});

export default rootReducer;
