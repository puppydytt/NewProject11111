import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {state} from './componets/StateData/state'



export const renderEntireTree =()=> {
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
};

serviceWorker.unregister();
