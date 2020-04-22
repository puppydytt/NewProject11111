import * as serviceWorker from './serviceWorker';
import './index.css'
import {rerenderEntireTree} from "./render";
import state from "./componets/StateData/state";

rerenderEntireTree(state);

serviceWorker.unregister();