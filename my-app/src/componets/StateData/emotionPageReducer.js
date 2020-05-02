const NEW_MOOD_UPLOAD = 'NEW-MOOD-UPLOAD';
const NEW_MESSAGE_MOOD_UPDATE = 'NEW-MESSAGE-MOOD-UPDATE';


const emotionPageReducer = (action, state) => {

    if (action.type === NEW_MOOD_UPLOAD) { // Dispatch for profile page
        let newMood = {
            id: 3,
            mood: state.newEmotionTextElement
        };
        state.emotion.push(newMood);
        state.newEmotionTextElement = "";

    } else if (action.type === NEW_MESSAGE_MOOD_UPDATE) {
        state.newEmotionTextElement = action.newText;
    }
    return state;
}


export default emotionPageReducer;