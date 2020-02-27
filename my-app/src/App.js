import React from 'react';
import './App.css';
import Header from './componets/Header/header';
import NavBar from './componets/Navbar/navbar';
import Profile from "./componets/MainContent/profile";



const App = ()=> {
    return(
   <div className ="app-creator">
     <Header/>
        <NavBar/>
        <Profile/>
        </div>



);
}


export default App;
