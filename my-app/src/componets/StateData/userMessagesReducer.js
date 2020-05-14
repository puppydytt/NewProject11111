const NEW_USER_MESSAGE = 'NEW-USER-MESSAGE'
const NEW_MESSAGE_ELEMENT_UPDATE = 'NEW-MESSAGE-ELEMENT-UPDATE'

let initialState = {
    messages: [
        {id: 1, dialog: 'message1'},
        {id: 2, dialog: 'message2'},
        {id: 3, dialog: 'message3'}
    ],
    messageTextElement: ''
}


const userMessagesReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case NEW_USER_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            let newUserMessage = { // Dispatch for messages page
                id: 5,
                dialog: state.messageTextElement
            }
            stateCopy.messages.push(newUserMessage);
            stateCopy.messageTextElement = ""
            return stateCopy;
        }
        case NEW_MESSAGE_ELEMENT_UPDATE:
            let stateCopy = {...state}
            stateCopy.messageTextElement = {...state.messageTextElement}
            stateCopy.messageTextElement = action.newMessage
            return stateCopy;
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
