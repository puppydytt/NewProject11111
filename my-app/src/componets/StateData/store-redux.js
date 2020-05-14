import {combineReducers, createStore} from "redux";
import emotionPageReducer from "./emotionPageReducer";
import userMessagesReducer from "./userMessagesReducer";
import userPageReducer from "./userPageReducer";
import friendPageReducer from "./friendsPageReducer";

let reducers = combineReducers({
    emotionPage: emotionPageReducer,
    userMessages: userMessagesReducer,
    userPage: userPageReducer,
    friendsPage: friendPageReducer
});

let store = createStore(reducers);

export default store;

window.store = store;