import React from 'react';
import Profile from "./Profile";
import {addLikePostAC, addPostAC, setProfileAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {TProfilePage, TProfileResponse, TUserPost} from "../../redux/reducers/types/TProfile_reducer";
import {TProfileClassPropsType} from "./types/TProfilePageContainer";
import axios from "axios";


class ProfilePageContainer extends React.Component<TProfileClassPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
  console.log(state.profilePage.profile);
  return {
    userPosts: state.profilePage.userPosts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile
  };
};

const ProfileContainer = connect(mapStateToProps, {
  updatePostTextAC,
  addPostAC,
  addLikePostAC,
  setProfileAC
})(ProfilePageContainer);

export default ProfileContainer;
