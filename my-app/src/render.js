import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {newUserMood, newMessageMoodUpdate, newMessageElementUpdate, newMessageElement} from "./componets/StateData/state";




export const rerenderEntireTree =(state)=> {
    ReactDOM.render
    (<App state={state} newUserMood={newUserMood}
          newMessageMoodUpdate={newMessageMoodUpdate}
          newMessageElementUpdate={newMessageElementUpdate}
          newMessageElement={newMessageElement}/>, document.getElementById('root'));
};

