import {rerenderEntireTree} from "../../render";


const state = {


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

};

window.state = state;

export let newMessageElement = () => {
    let newUserMessage = {
        id: 5,
        dialog: state.userMessages.messageTextElement
    };
    state.userMessages.messages.push(newUserMessage);
    state.userMessages.messageTextElement = ""
    rerenderEntireTree(state);

};

export let newMessageElementUpdate = (newMessage) => {
    state.userMessages.messageTextElement = newMessage
    rerenderEntireTree(state);

};


export let newUserMood = () => {

    let newMood = {
        id: 3,
        mood: state.emotionPage.newEmotionTextElement
    };
    state.emotionPage.emotion.push(newMood);
    state.emotionPage.newEmotionTextElement = ""
    rerenderEntireTree(state);
};

export let newMessageMoodUpdate = (newText) => {
    state.emotionPage.newEmotionTextElement = newText;
    rerenderEntireTree(state);
};

export default state;