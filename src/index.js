import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state'
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
            <App state = {state} addPost = {store.addPost.bind(store)} changePostText = {store.changePostText.bind(store)} />
    </BrowserRouter> , document.getElementById('root'));
}
store.subscribe(rerenderTree);

//first call
rerenderTree(store.getState());





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
