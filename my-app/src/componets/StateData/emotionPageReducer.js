const NEW_MOOD_UPLOAD = 'NEW-MOOD-UPLOAD';
const NEW_MESSAGE_MOOD_UPDATE = 'NEW-MESSAGE-MOOD-UPDATE';


const emotionPageReducer = (action, state) => {
    debugger;
    switch (action.type) {
        case NEW_MOOD_UPLOAD:
            let newMood = {
                id: 3,
                mood: state.newEmotionTextElement
            };
            state.emotion.push(newMood);
            state.newEmotionTextElement = "";
            return state;
        case NEW_MESSAGE_MOOD_UPDATE:
            state.newEmotionTextElement = action.newText;
            return state;
        default:
            return state


    }

}
export const addPostActionCreator = () => ({type: NEW_MOOD_UPLOAD}) //For profile page action addPost creator
export const onPostChangeActionCreator = (text) => ({type: NEW_MESSAGE_MOOD_UPDATE, newText: text}) //For profile page action onPostChange creator

export default emotionPageReducer;