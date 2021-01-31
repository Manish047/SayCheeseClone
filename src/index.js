import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import authReducer from './store/reducer/auth';
import onBoardingReducer from './store/reducer/onBoard';

// Import redux functionality
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

// Importing State Management library
import createSagaMiddleware from "redux-saga";

// Import Saga Listener
import {
  watchAuth
} from "./store/sagas/index";

// A dynamic variable that will be injected into our js by chrome extension at runtime to let chrome extension know that we do have a store
// compose is used to merge several enhancers, is native by redux and doesn't support devtools
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

// Create root reducer using combineReducers
const rootReducer = combineReducers({
  auth: authReducer,
  onBoard: onBoardingReducer
});

// Create the store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run sagaMiddleware listeners
sagaMiddleware.run(watchAuth);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
