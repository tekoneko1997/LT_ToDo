import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import reducers from './Reducers/indexs';
//import logger from 'redux-logger';
import './index.css';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import App from './Components/Pages/App';

import * as serviceWorker from './serviceWorker';



/* 状態遷移(reducers)をstoreとして取得 */
const store = createStore(reducers, []);
// const store = createStore(
//     reducers,
//     applyMiddleware(logger),
//   );

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
