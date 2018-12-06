import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

const configureStore = (preloadedstate = {}) => (
  createStore(rootReducer, preloadedstate, applyMiddleware(...middlewares))
);

export default configureStore;
