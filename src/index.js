import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import InputReducer from './redux/Input/SearchFieldReducer'
import UserReducer from './redux/User/UserReducer'

const reducers = combineReducers({
    input: InputReducer,
    user: UserReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
   <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
