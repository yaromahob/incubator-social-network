import React from 'react';
import Profile from "./Profile";
import {addLikePostAC, addPostAC, setProfileAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {TProfilePage} from "../../redux/reducers/types/TProfile_reducer";
import {CommonProfileWithUrlType} from "./types/TProfilePageContainer";
import axios from "axios";
import {useParams, withRouter} from "react-router-dom";


class ProfilePageContainer extends React.Component<CommonProfileWithUrlType> {
  componentDidMount() {
    let userID = Number(this.props.match.params.userId);
    if (!userID) userID = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
      this.props.setProfileAC(response.data);
    });
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
    profile: state.profilePage.profile
  };
};

let WithUrlDataContainerComponent = withRouter(ProfilePageContainer);

const ProfileContainer = connect(mapStateToProps, {
  updatePostTextAC,
  addPostAC,
  addLikePostAC,
  setProfileAC
})(WithUrlDataContainerComponent);

export default ProfileContainer;
