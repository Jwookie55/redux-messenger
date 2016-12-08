import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';


import App from './components/App.js';
import messageReducer from './reducers/messageReducer.js';

const reducers = combineReducers({
  messages: messageReducer,
})
const store = applyMiddleware(Thunk)(createStore)(reducers);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
