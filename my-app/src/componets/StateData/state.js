import userMessagesReducer from "./userMessagesReducer";
import emotionPageReducer from "./emotionPageReducer";

const NEW_MOOD_UPLOAD = 'NEW-MOOD-UPLOAD';
const NEW_MESSAGE_MOOD_UPDATE = 'NEW-MESSAGE-MOOD-UPDATE';
const NEW_USER_MESSAGE = 'NEW-USER-MESSAGE'
const NEW_MESSAGE_ELEMENT_UPDATE = 'NEW-MESSAGE-ELEMENT-UPDATE'


let store = {
    _state: {
        userPage: {
            user: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'}
            ]
        },

        emotionPage: {
            emotion: [
                {id: 1, mood: 'How are you doing?'}
            ],
            newEmotionTextElement: ''
        },


        friendsPage: {
            friends: 'FriendsPage'
        },


        userMessages: {
            messages: [
                {id: 1, dialog: 'message1'},
                {id: 2, dialog: 'message2'},
                {id: 3, dialog: 'message3'}
            ],
            messageTextElement: ''
        }

    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer; //pattern OBSERVER
    },
    getState() {
        return this._state
    },


    dispatch(action) {
        debugger;
        this._state.userMessages = userMessagesReducer(action, this._state.userMessages)
        this._state.emotionPage = emotionPageReducer(action, this._state.emotionPage)
        this._callSubscriber(this._state);

    }

}


export const addPostActionCreator = () => ({type: NEW_MOOD_UPLOAD}) //For profile page action addPost creator
export const onPostChangeActionCreator = (text) => ({type: NEW_MESSAGE_MOOD_UPDATE, newText: text}) //For profile page action onPostChange creator
export const newMessageActionCreator = () => ({type: NEW_USER_MESSAGE})//For message page action newMessage
export const newMessageUpdateActionCreator = (textMessage) => ({
    type: NEW_MESSAGE_ELEMENT_UPDATE,
    newMessage: textMessage
})//For profile gae onPost change ActionCreator
window.store = store;

export default store;