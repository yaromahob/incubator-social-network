import React from 'react';
import Profile from "./Profile";
import {addLikePostAC, addPostAC, updatePostTextAC} from "../../redux/actions/profileAC";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {TProfilePage} from "../../redux/reducers/types/TProfile";
import {CommonProfileWithUrlType, mapDispatchToPropsType, TProfileClassPropsType} from "./types/TProfilePageContainer";
import {withRouter} from "react-router-dom";
import {getProfileUserThunk} from "../../redux/asyncActions/getUsersThunk";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import {compose} from "redux";


// class ProfileContainer extends React.Component<CommonProfileWithUrlType> {
//   componentDidMount() {
//     let userID = Number(this.props.match.params.userId);
//     if (!userID) userID = 2;
//     this.props.getProfileUserThunk(userID);
//   }
//
//   render() {
//     return (
//       <Profile userPosts={this.props.userPosts}
//                newPost={this.props.newPost}
//                profile={this.props.profile}
//                updatePostTextAC={this.props.updatePostTextAC}
//                addPostAC={this.props.addPostAC}
//                addLikePostAC={this.props.addLikePostAC}
//       />
//     );
//   }
// }

// let mapStateToProps = (state: AppStateType): TProfilePage => {
//   return {
//     userPosts: state.profilePage.userPosts,
//     newPost: state.profilePage.newPost,
//     profile: state.profilePage.profile,
//   };
// };
//
// let ProfileAuthRedirect = WithAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(ProfileAuthRedirect);
//
//
// export default connect(mapStateToProps, {
//   updatePostTextAC,
//   addPostAC,
//   addLikePostAC,
//   getProfileUserThunk
// })(WithUrlDataContainerComponent);


let mapStateToProps = (state: AppStateType): TProfilePage => {
  return {
    userPosts: state.profilePage.userPosts,
    newPost: state.profilePage.newPost,
    profile: state.profilePage.profile,
  };
};

class ProfileContainer extends React.Component<CommonProfileWithUrlType> {
  componentDidMount() {
    let userID = Number(this.props.match.params.userID);
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


export default compose(
  connect<TProfilePage, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
      updatePostTextAC,
      addPostAC,
      addLikePostAC,
      getProfileUserThunk
    }),
  withRouter, WithAuthRedirect)(ProfileContainer);