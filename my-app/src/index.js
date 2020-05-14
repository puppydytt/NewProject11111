import * as serviceWorker from './serviceWorker';
import './index.css'
import store from "./componets/StateData/store-redux";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = () => {
    debugger;
    ReactDOM.render
    (
        <BrowserRouter>
            <Provider store={store}>
                <App state={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree)


serviceWorker.unregister();