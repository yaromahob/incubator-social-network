import React from 'react';
import Profile from "./Profile";
import {addLikePostAC, addPostAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {TProfilePage} from "../../redux/reducers/types/TProfile";
import {CommonProfileWithUrlType} from "./types/TProfilePageContainer";
import {withRouter} from "react-router-dom";
import {getProfileUserThunk} from "../../redux/asyncActions/getUsersThunk";
import Login from "../Login/Login";


class ProfilePageContainer extends React.Component<CommonProfileWithUrlType> {
  componentDidMount() {
    let userID = Number(this.props.match.params.userId);
    if (!userID) userID = 2;
    this.props.getProfileUserThunk(userID);
  }
  
  render() {
    return this.props.isAuth ? (
      <Profile userPosts={this.props.userPosts}
               newPost={this.props.newPost}
               profile={this.props.profile}
               updatePostTextAC={this.props.updatePostTextAC}
               addPostAC={this.props.addPostAC}
               addLikePostAC={this.props.addLikePostAC}
      />
    ) : <Login/>;
  }
}

let mapStateToProps = (state: AppStateType): TProfilePage & { isAuth: boolean } => {
  return {
    userPosts: state.profilePage.userPosts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfilePageContainer);

const ProfileContainer = connect(mapStateToProps, {
  updatePostTextAC,
  addPostAC,
  addLikePostAC,
  getProfileUserThunk
})(WithUrlDataContainerComponent);

export default ProfileContainer;
