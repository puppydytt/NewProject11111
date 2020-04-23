import * as serviceWorker from './serviceWorker';
import './index.css'
import store   from "./componets/StateData/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";




export const rerenderEntireTree =(state)=> {
    ReactDOM.render
    (<App state={state} newUserMood={store.newUserMood.bind(store)}
          newMessageMoodUpdate={store.newMessageMoodUpdate.bind(store)}
          newMessageElementUpdate={store.newMessageElementUpdate.bind(store)}
          newMessageElement={store.newMessageElement.bind(store)}/>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

serviceWorker.unregister();