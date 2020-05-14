import React from 'react';
import classes from './messages.module.css';
import Dialog from "./Dialog/dialog";
import UserItem from "./User/userItem.js"



const Messages = (props) => {
    debugger;

    let UserElements = props.userPage
        .map(u => <UserItem id={u.id} name={u.name}/>);
    let MessagesElements = props.userMessages
        .map(d => <Dialog dialog={d.dialog} id={d.id}/>);


    const sendMessage = () => {
        props.onMessageChange()
    };


    const onMessageChange = (event) => {
        let textMessage = event.target.value;
        props.onMessageTextChange(textMessage)
    }


    return (
        <React.Fragment>
            <div className={classes.dialogs}>
                <div className={classes.userArea}>
                    <a className={classes.users}>{UserElements}</a>
                </div>
                <div>
                    <div className={classes.chatArea}>
                        {MessagesElements}
                        <input className={classes.textMessage} placeholder='Type to send message...'
                               value={props.messageTextElement} onChange={onMessageChange}/>
                        <button className={classes.sendMessage} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export  default  Messages;