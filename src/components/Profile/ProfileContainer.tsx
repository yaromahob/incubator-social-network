import React from 'react';
import Profile from "./Profile";
import {addLikePostAC, addPostAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {TProfilePage} from "../../redux/reducers/types/TProfile";
import {CommonProfileWithUrlType} from "./types/TProfilePageContainer";
import {withRouter} from "react-router-dom";
import {getProfileUserThunk} from "../../redux/asyncActions/getUsersThunk";
import WithAuthRedirect from "../HOC/WithAuthRedirect";


class ProfilePageContainer extends React.Component<CommonProfileWithUrlType> {
  componentDidMount() {
    let userID = Number(this.props.match.params.userId);
    if (!userID) userID = 2;
    this.props.getProfileUserThunk(userID);
  }
  
  render() {
    return (
      <Profile userPosts={this.props.userPosts}
               newPost={this.props.newPost}
               profile={this.props.profile}
               updatePostTextAC={this.props.updatePostTextAC}
               addPostAC={this.props.addPostAC}
               addLikePostAC={this.props.addLikePostAC}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType): TProfilePage => {
  return {
    userPosts: state.profilePage.userPosts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile,
  };
};

let ProfileAuthRedirect = WithAuthRedirect(ProfilePageContainer);
let WithUrlDataContainerComponent = withRouter(ProfileAuthRedirect);


export default connect(mapStateToProps, {
  updatePostTextAC,
  addPostAC,
  addLikePostAC,
  getProfileUserThunk
})(WithUrlDataContainerComponent);
