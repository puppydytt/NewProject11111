import React from 'react';
import classes from './messages.module.css';
import Dialog from "./Dialog/dialog";
import UserItem from "./User/userItem.js"

const Messages = (props) => {

    let UserElements = props.state.userPage.user
        .map(props => <UserItem id={props.id} name={props.name}/>);
    let MessagesElements = props.state.userMessages.messages
        .map(props  => <Dialog dialog={props.dialog} id={props.id}/>);

    let newMessage = React.createRef();


    const onMessageChange =()=>{
        let textMessage = newMessage.current.value;
        props.newMessageElementUpdate(textMessage)
    }


    const sendMessage = () => {
        let textMessage = newMessage.current.value;
        props.newMessageMoodElement(textMessage);
    };
    return (
        <React.Fragment>
            <div className={classes.dialogs}>
                <div className={classes.users}>
                    {UserElements}
                </div>
                <div className={classes.messages}>
                    {MessagesElements}
                    <div>
                        <input className={classes.textMessage} ref={newMessage} value={props.state.userMessages.messageTextElement} onChange={onMessageChange}/>
                        <button className={classes.sendMessage} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export  default  Messages;