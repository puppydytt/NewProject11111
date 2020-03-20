import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./componets/Header/header";
import Profile from "./componets/MainContent/profile";
import Messages from "./componets/Header/Messages/messages";
import Friends from "./componets/Header/Friends/friends";
import Settings from "./componets/Header/Settings/settings";
import Basement from './componets/Basment/basement';


const App = () => {
    return (

        <React.Fragment>
            <BrowserRouter>
                <mtd className="app-creator">
                    <td className="grid1"><Header/></td>
                    <dt className="app-content">
                        <Route path="/messages.js" component={Messages}/>
                        <Route path="/profile.js" component={Profile}/>
                        <Route path="/friends.js" component={Friends}/>
                        <Route path="/settings.js" component={Settings}/>
                    </dt>
                    <td className="grid4"><Basement/></td>
                </mtd>
            </BrowserRouter>
        </React.Fragment>


    );
}


export default App;

