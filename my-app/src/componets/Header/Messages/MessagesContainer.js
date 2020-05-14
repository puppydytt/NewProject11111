import React from "react";
import {connect} from "react-redux"
import Messages from "./messages";
import {newMessageActionCreator, newMessageUpdateActionCreator} from "../../StateData/userMessagesReducer";


/*const MessagesContainer = (props) => {
    debugger;
    const onMessageChange = () => {
        props.dispatch(newMessageActionCreator());
    }
    const onMessageTextChange = (textMessage) => {
        props.dispatch(newMessageUpdateActionCreator(textMessage))
    }
    return (
        <Messages onMessageChange={onMessageChange} onMessageTextChange={onMessageTextChange} userPage={props.userPage}
                  userMessages={props.userMessages} messageTextElement={props.state.userMessages.messageTextElement}/>)
};*/


let mapStateToProps = (store) => {
    debugger;
    return {
        userPage: store.userPage.user,
        userMessages: store.userMessages.messages,
        messageTextElement: store.userMessages.messageTextElement
    }
}


let dispatchToProps = (dispatch) => {
    return {
        onMessageChange: () => {
            dispatch(newMessageActionCreator())
        },
        onMessageTextChange: (textMessage) => {
            dispatch(newMessageUpdateActionCreator(textMessage))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, dispatchToProps)(Messages);


export default MessagesContainer;