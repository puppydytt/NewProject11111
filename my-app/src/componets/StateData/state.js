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
    _callSubscriber() {
    },

    newMessageElement() {
        let newUserMessage = {
            id: 5,
            dialog: this._state.userMessages.messageTextElement
        }
        this._state.userMessages.messages.push(newUserMessage);
        this._state.userMessages.messageTextElement = ""
        this._callSubscriber(this._state)
    },
    newMessageElementUpdate(newMessage) {
        this._state.userMessages.messageTextElement = newMessage
        this._callSubscriber(this._state);

    },

    newUserMood() {
        let newMood = {
            id: 3,
            mood: this._state.emotionPage.newEmotionTextElement
        };
        this._state.emotionPage.emotion.push(newMood);
        this._state.emotionPage.newEmotionTextElement = ""
        this._callSubscriber(this._state);
    },
    newMessageMoodUpdate (newText) {
        this._state.emotionPage.newEmotionTextElement = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return store._state
    }

};

window.store = store;

export default store;