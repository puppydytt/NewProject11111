import React from 'react';
import classes from './myposts.module.css'
import Posts from "./Post/posts";



const MyPosts = (props) => {debugger;

   let PostElement = props.emotionPage.emotion
       .map(e => <Posts id={e.id} mood={e.mood}/>);


    const addPost = () => {
        props.onAddPost()
    };

    const onPostChange =(event)=>{
        let text = event.target.value
        props.textElementChange(text)
    };


    return (
        <React.Fragment>
            <div className={classes.maincontent}>
                <div>
                    {PostElement}
                    <input className={classes.input} value={props.newEmotionTextElement} onChange={onPostChange}/>
                </div>
                <div>
                    <button className={classes.button} onClick={addPost}>Post</button>
                </div>
                <div>

                </div>
            </div>

        </React.Fragment>
    );
};

export default MyPosts;