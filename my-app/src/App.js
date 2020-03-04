import React from 'react';
import './App.css';
import Header from "./componets/Header/header";
import Basement from './componets/Basment/basement';
import Profile from "./componets/MainContent/profile";
import Chat from "./componets/Chat/Chat";



const App = ()=> {
    return(
   <div className ="app-creator">
        <Header/>
        <Basement/>
        <Profile/>
        <Chat/>
        </div> 



);
}


export default App;
