import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducers from './reducers';
const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

export default createStore(
  rootReducers,
  compose(applyMiddleware(...middleware)),
);
