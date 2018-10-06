import React from 'react';
import ReactDOM from 'react-dom';

// Redux additions
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
