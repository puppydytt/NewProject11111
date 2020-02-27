import React from 'react';
import classes from './navbar.module.css'

const NavBar = () =>{
    return(

        <nav className = {classes.nav}>
        <div className = {classes.item}>
        <a>  Friends </a>
        </div>
        <div className = {classes.item}>
        <a>  News </a>
        </div>
        <div className ={classes.item}>
        <a>Messages</a>
        </div>

    </nav>

    );
}

export default NavBar;





