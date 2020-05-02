import React from 'react';
import classes from './messages.module.css';
import Dialog from "./Dialog/dialog";
import UserItem from "./User/userItem.js"
import {newMessageActionCreator, newMessageUpdateActionCreator} from "../../StateData/userMessagesReducer";


const Messages = (props) => {debugger;

    let UserElements = props.state.userPage.user
        .map(props => <UserItem id={props.id} name={props.name}/>);
    let MessagesElements = props.state.userMessages.messages
        .map(props  => <Dialog dialog={props.dialog} id={props.id}/>);



    const sendMessage = () => {
        props.dispatch(newMessageActionCreator());
    };


    const onMessageChange =(event)=>{
        let textMessage = event.target.value;
        props.dispatch(newMessageUpdateActionCreator(textMessage))
    }


    return (
        <React.Fragment>
            <div className={classes.dialogs}>
                <div>
                    <a className={classes.users}>{UserElements}</a>
                </div>
                <div>
                <div className={classes.messages}>
                    {MessagesElements}
                </div>
                    <div>
                        <input className={classes.textMessage}  value={props.state.userMessages.messageTextElement} onChange={onMessageChange}/>
                        <button className={classes.sendMessage} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export  default  Messages;