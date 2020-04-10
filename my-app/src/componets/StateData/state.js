export const state = {

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
            {id: 1, mood: 'fine'},
            {id: 2, mood: 'so-so'}
        ]
    },


    friendsPage: {
        friends: [
            {id: 1, friend: 'Dima'},
            {id: 2, friend: 'Anton'},
            {id: 3, friend: 'Andrey'}
        ]
    },


    userMessages: {
        messages: [
            {id: 1, dialog: 'message1'},
            {id: 2, dialog: 'message2'},
            {id: 3, dialog: 'message3'}
        ]
    }
};


export  let  newMessageElement = (textMessage)=>{
    let newUserMessage = {
        id: 5,
        dialog: textMessage
    };
    state.userMessages.messages.push(newUserMessage);
};


