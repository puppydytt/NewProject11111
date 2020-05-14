import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from "./componets/Header/header";
import Profile from "./componets/MainContent/profile";
import FriendsContainer from "./componets/Header/Friends/FriendsContainer";
import SettingsContainer from "./componets/Header/Settings/SettingContainer";
import Basement from './componets/Basment/basement';
import MessagesContainer from "./componets/Header/Messages/MessagesContainer";


const App = (props) => {
    debugger;
    return (

        <React.Fragment>

            <div className="app-creator">
                <div className="header"><Header/></div>
                <div className="content">
                    <Route path="/messages.js" render={() => <MessagesContainer/>}/>
                    <Route path="/profile.js" render={() => <Profile/>}/>
                    <Route path="/friends.js" render={() => <FriendsContainer/>}/>
                    <Route path="/settings.js" render={() => <SettingsContainer/>}/>
                </div>
                <div className="footer"><Basement/></div>
            </div>

        </React.Fragment>

    );
};

export default App;


