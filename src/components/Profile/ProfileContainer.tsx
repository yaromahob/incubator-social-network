import React from 'react';
import Profile from "./Profile";
import {addLikePost, addPostAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";



let mapStateToProps = (state: AppStateType) => {
  return {
    postUser: state.profilePage.userPosts,
    newPost: state.profilePage.newPost
  }
  
}
let mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    updatePostCallback: (text: string) => {
      dispatch(updatePostTextAC(text))
    },
    addPostCallback:(post: string) => {
      dispatch(addPostAC(post))
    },
    addLikeCallback: (id: string) => {
      dispatch(addLikePost(id))
    }
  }
  
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)


export default ProfileContainer;
