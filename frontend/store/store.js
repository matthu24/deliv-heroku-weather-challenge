import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from '../thunk/thunk';
import rootReducer from '../reducers/root';


const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}


const configureStore = () => (
  createStore(rootReducer,applyMiddleware(...middlewares))
)

export default configureStore;
