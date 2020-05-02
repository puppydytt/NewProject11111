import * as serviceWorker from './serviceWorker';
import './index.css'
import store from "./componets/StateData/store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";




export const rerenderEntireTree =(state)=> {
    ReactDOM.render
    (<App state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();