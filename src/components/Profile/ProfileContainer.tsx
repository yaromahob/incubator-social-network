import React from 'react';
import Profile from "./Profile/Profile";
import {addLikePostAC, addPostAC, setStatusAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {TProfilePage} from "../../redux/reducers/types/TProfile";
import {CommonProfileWithUrlType, mapDispatchToPropsType} from "./types/TProfilePageContainer";
import {withRouter} from "react-router-dom";
import {getProfileUserThunk, getStatusUserThunk, setStatusUserThunk} from "../../redux/asyncActions/getUsersThunk";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppStateType): TProfilePage => {
  return {
    userPosts: state.profilePage.userPosts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

class ProfileContainer extends React.Component<CommonProfileWithUrlType> {
  componentDidMount() {
    let userID = Number(this.props.match.params.userId);
    if (!userID) userID = 26477;
    this.props.getProfileUserThunk(userID);
    this.props.getStatusUserThunk(userID);
  }
  
  render() {
    return (
      <Profile userPosts={this.props.userPosts}
               newPost={this.props.newPost}
               profile={this.props.profile}
               statusUser={this.props.status}
               updatePostTextAC={this.props.updatePostTextAC}
               addPostAC={this.props.addPostAC}
               addLikePostAC={this.props.addLikePostAC}
               setStatusUserThunk={this.props.setStatusUserThunk}
      />
    );
  }
}


export default compose<React.ComponentType>(
  connect<TProfilePage, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
      updatePostTextAC,
      addPostAC,
      addLikePostAC,
      setStatusAC,
      getProfileUserThunk,
      getStatusUserThunk,
      setStatusUserThunk
    }),
  withRouter, WithAuthRedirect)(ProfileContainer);