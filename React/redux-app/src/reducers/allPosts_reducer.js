export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      // action.payload = ({title: 'C'})
       let allPosts = [action.payload, ...state];
      // ...state = [{title: 'A'}, {title: 'B'}]
       return allPosts;
      // RESULT --> [{title: 'A'}, {titel: 'B'}, {title: 'C'}]
    default:
       return state;
  }
}
// The newPost object is arriving as the action's payload and is
// being combined with whatever else is currently in the allPost piece of state

// Note we are not directly modifying anything; we are always
// creating new objects and arrays, then returning them as new pieces of state
