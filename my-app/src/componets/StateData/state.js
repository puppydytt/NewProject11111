import emotionPageReducer from "./emotionPageReducer";
const NEW_MOOD_UPLOAD = 'NEW-MOOD-UPLOAD';
const NEW_MESSAGE_MOOD_UPDATE = 'NEW-MESSAGE-MOOD-UPDATE';
const NEW_USER_MESSAGE = 'NEW-USER-MESSAGE'
const NEW_MESSAGE_ELEMENT_UPDATE ='NEW-MESSAGE-ELEMENT-UPDATE'



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


        ProfileDescription: {
            description: [
                {id: 1, word: 'How are you doing?'}
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
    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer; //pattern OBSERVER
    },
    getState() {
        return store._state
    },


    dispatch(action) {debugger;

       if   (action.type === NEW_MOOD_UPLOAD) { // Dispatch for profile page
            let newMood = {
                id: 3,
                mood: this._state.emotionPage.newEmotionTextElement
            };
            this._state.emotionPage.emotion.push(newMood);
            this._state.emotionPage.newEmotionTextElement = ""
            this._callSubscriber(this._state);

        } else if (action.type === NEW_MESSAGE_MOOD_UPDATE) {
            this._state.emotionPage.newEmotionTextElement = action.newText;
            this._callSubscriber(this._state);

        }

        this._state.emotionPage = emotionPageReducer(this._state.emotionPage, action) //emotionPageReducer


        if (action.type === NEW_USER_MESSAGE) {
            let newUserMessage = { // Dispatch for messages page
                id: 5,
                dialog: this._state.userMessages.messageTextElement
            }
            this._state.userMessages.messages.push(newUserMessage);
            this._state.userMessages.messageTextElement = ""
            this._callSubscriber(this._state);

        } else if (action.type === NEW_MESSAGE_ELEMENT_UPDATE)
            this._state.userMessages.messageTextElement = action.newMessage
            this._callSubscriber(this._state);
    }

};
export const addPostActionCreator = () => ({type: NEW_MOOD_UPLOAD}) //For profile page action addPost creator
export const onPostChangeActionCreator = (text) => ({type: NEW_MESSAGE_MOOD_UPDATE, newText: text}) //For profile page action onPostChange creator
export const newMessageActionCreator = ()=>({type:NEW_USER_MESSAGE})//For message page action newMessage
export const newMessageUpdateActionCreator =(textMessage)=>({type:NEW_MESSAGE_ELEMENT_UPDATE, newMessage:textMessage})//For profile gae onPost change ActionCreator
window.store = store;

export default store;