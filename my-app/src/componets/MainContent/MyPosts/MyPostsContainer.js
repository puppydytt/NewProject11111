import React from "react";
import {connect} from "react-redux"
import MyPosts from "./myposts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../StateData/emotionPageReducer";


/*const MyPostsContainer =(props)=>{debugger;

    const textElementChange =(text)=>{
        props.dispatch(onPostChangeActionCreator(text))
    };
    const onAddPost =()=>{
        props.dispatch(addPostActionCreator());
    }

 return(<MyPosts textElementChange ={textElementChange} onAddPost={onAddPost} emotionPage={props.emotionPage} newEmotionTextElement={props.emotionPage.newEmotionTextElement}/>)
}*/

let MapStateToProps = (store) => {
    debugger;
    return {
        emotionPage: store.emotionPage,
        newEmotionTextElement: store.emotionPage.newEmotionTextElement
    }
}

let dispatchToProps = (dispatch) => {
    return {
        textElementChange: (text) => dispatch(onPostChangeActionCreator(text)),
        onAddPost: () => dispatch(addPostActionCreator())
    }

}

const MyPostContainer = connect(MapStateToProps, dispatchToProps)(MyPosts)


export default MyPostContainer;