import React from "react";
import {connect} from 'react-redux'
import Friends from "./friends";


let mapStateToProps = (store) => {
    debugger;
    return {
        friendsPage: store.friendsPage.friends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)


export default FriendsContainer
