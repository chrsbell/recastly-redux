import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const initialState = {
  videos: exampleVideoData,
  video: exampleVideoData[0],
  // searchValue: ''
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;