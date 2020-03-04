import React from 'react';
import classes from './header.module.css'

const Header =() =>{
    return(
        <header className={classes.header}>
            <img src ="https://i.stack.imgur.com/pVJ3E.png" alt=""></img>
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
                <div className={classes.item}>
                    Settings
                </div>

            </nav>
        </header>

    );
}

export default Header;