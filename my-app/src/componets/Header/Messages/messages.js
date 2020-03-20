import React from 'react';
import classes from './messages.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


const Messages = () => {
    const Dialog = (props) => {
        return (
            <div className={classes.message}>{props.dialog}</div>
        );
    }

    let DialogData = [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'},
        {id: 4, name: 'User4'}
    ];


    let MessagesData = [
        {id: 1, dialog: 'message1'},
        {id: 2, dialog: 'message2'},
        {id: 3, dialog: 'message3'}
    ];


    return (
        <React.Fragment>
            <mtd className={classes.dialogs}>
                <td className={classes.users}>
                    <User name={DialogData[0].name} id={DialogData[0].id}/>
                    <User name={DialogData[1].name} id={DialogData[1].id}/>
                    <User name={DialogData[2].name} id={DialogData[2].id}/>
                    <User name={DialogData[3].name} id={DialogData[3].id}/>
                </td>


                <td className={classes.messages}>
                    <Dialog dialog={MessagesData[0].dialog} id={DialogData[0].id}/>
                    <Dialog dialog={MessagesData[1].dialog} id={DialogData[1].id}/>
                    <Dialog dialog={MessagesData[2].dialog} id={DialogData[2].id}/>
                </td>
            </mtd>
        </React.Fragment>
    );
}


export default Messages;