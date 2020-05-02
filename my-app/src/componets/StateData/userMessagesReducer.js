const NEW_USER_MESSAGE = 'NEW-USER-MESSAGE'
const NEW_MESSAGE_ELEMENT_UPDATE = 'NEW-MESSAGE-ELEMENT-UPDATE'

const userMessagesReducer = (action, state) => {
    if (action.type === NEW_USER_MESSAGE) {
        let newUserMessage = { // Dispatch for messages page
            id: 5,
            dialog: state.messageTextElement
        }
        state.messages.push(newUserMessage);
        state.messageTextElement = ""


    } else if (action.type === NEW_MESSAGE_ELEMENT_UPDATE)
        state.messageTextElement = action.newMessage
    return state;
}


export default userMessagesReducer;
