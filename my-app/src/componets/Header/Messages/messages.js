import React from 'react';
import classes from './messages.module.css';
import Dialog from "./Dialog/dialog";
import UserItem from "./User/userItem.js"
import {newMessageElement} from "../../StateData/state";


const sendMessage = (props) => {
    let textMessage = newMessage.current.value;
    newMessageElement(textMessage);
    newMessage.current.value = "";

};

let newMessage = React.createRef();


const Messages = (props) => {
    let UserElements = props.state.userPage.user
        .map(u => <UserItem id={u.id} name={u.name}/>);
    let MessagesElements = props.state.userMessages.messages
        .map(m => <Dialog dialog={m.dialog} id={m.id}/>);

    return (
        <React.Fragment>
            <div className={classes.dialogs}>
                <div className={classes.users}>
                    {UserElements}
                </div>
                <div className={classes.messages}>
                    {MessagesElements}
                    <div>
                        <input className={classes.textMessage} ref={newMessage}/>
                        <button className={classes.sendMessage} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export  default  Messages;