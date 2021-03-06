import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// import {addPost, changePostText} from './Redux/state'

let rerenderTree = (state) =>{
console.log('rerendered')
ReactDOM.render(
    <BrowserRouter>
            <App state = {state} dispatch = {store.dispatch.bind(store)} />
    </BrowserRouter> , document.getElementById('root'));
}
store._subscribe(rerenderTree);

//first call
rerenderTree(store.getState());





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
