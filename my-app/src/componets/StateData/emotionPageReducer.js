const NEW_MOOD_UPLOAD = 'NEW-MOOD-UPLOAD';
const NEW_MESSAGE_MOOD_UPDATE = 'NEW-MESSAGE-MOOD-UPDATE';

let initialState = {
    emotion: [
        {id: 1, mood: 'Tell subs about your plans'}
    ],
    newEmotionTextElement: ''
}


const emotionPageReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case NEW_MOOD_UPLOAD: {
            let stateCopy = {...state}
            stateCopy.emotion = [...state.emotion]
            let newMood = {
                id: 3,
                mood: state.newEmotionTextElement
            };
            stateCopy.emotion.push(newMood);
            stateCopy.newEmotionTextElement = "";
            return stateCopy;
        }
        case NEW_MESSAGE_MOOD_UPDATE:
            let stateCopy = {...state}
            stateCopy.newEmotionTextElement = {...state.newEmotionTextElement}
            stateCopy.newEmotionTextElement = action.newText;
            return stateCopy;

        default:
            return state


    }


}
export const addPostActionCreator = () => ({type: NEW_MOOD_UPLOAD}) //For profile page action addPost creator
export const onPostChangeActionCreator = (text) => ({type: NEW_MESSAGE_MOOD_UPDATE, newText: text}) //For profile page action onPostChange creator

export default emotionPageReducer;