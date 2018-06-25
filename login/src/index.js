import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { logger } from 'redux-logger'

const defaultState = {
    count: 0,
    email: "",
    password: "",
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN_COUNT":
            return { ...state, count: state.count + 1 };
        case "UPDATE_EMAIL":
            return { ...state, email: action.email };
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
