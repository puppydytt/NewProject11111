const NEW_USER_MESSAGE = 'NEW-USER-MESSAGE'
const NEW_MESSAGE_ELEMENT_UPDATE = 'NEW-MESSAGE-ELEMENT-UPDATE'


const userMessagesReducer = (action, state) => {
    debugger;
    switch (action.type) {
        case NEW_USER_MESSAGE:
            let newUserMessage = { // Dispatch for messages page
                id: 5,
                dialog: state.messageTextElement
            }
            state.messages.push(newUserMessage);
            state.messageTextElement = ""
            return state;
        case NEW_MESSAGE_ELEMENT_UPDATE:
            state.messageTextElement = action.newMessage
            return state;
        default:
            return state;

    }

}
export const newMessageActionCreator = () => ({type: NEW_USER_MESSAGE})//For message page action newMessage
export const newMessageUpdateActionCreator = (textMessage) => ({
    type: NEW_MESSAGE_ELEMENT_UPDATE,
    newMessage: textMessage
})//For profile gae onPost change ActionCreator

export default userMessagesReducer;
