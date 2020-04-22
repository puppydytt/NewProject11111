import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./componets/Header/header";
import Profile from "./componets/MainContent/profile";
import Messages from "./componets/Header/Messages/messages";
import Friends from "./componets/Header/Friends/friends";
import Settings from "./componets/Header/Settings/settings";
import Basement from './componets/Basment/basement';



const App = (props) => {
    return (

        <React.Fragment>
            <BrowserRouter>
                <div className="app-creator">
                    <div className="grid1"><Header/></div>
                    <div className="app-content">
                        <Route path="/messages.js" render={() => <Messages state={props.state} newMessageElementUpdate={props.newMessageElementUpdate} newMessageElement={props.newMessageElement}/>}/>
                        <Route path="/profile.js" render={() => <Profile state={props.state} newPostTextElement={props.state.emotionPage.newEmotionTextElement} newUserMood={props.newUserMood} newMessageMoodUpdate={props.newMessageMoodUpdate}/>}/>
                        <Route path="/friends.js" render={() => <Friends friendsPage={props.state.friendsPage}/>}/>
                        <Route path="/settings.js" render={() => <Settings state={props.state}/>}/>
                    </div>
                    <div className="grid4"><Basement/></div>
                </div>
            </BrowserRouter>
        </React.Fragment>


    );
};

export default App;


