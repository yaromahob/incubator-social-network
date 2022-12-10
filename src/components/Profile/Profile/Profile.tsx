import React from 'react';
import './Profile.css';
import Post from "../../Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {TProfile} from "../types/TProfile";
import AddNewPost from "../../Post/AddNewPost";


const Profile: React.FC<TProfile> = (props) => {
  
  const addLikeHandler = (id: string) => {
    props.addLikePostAC(id);
  };
  
  const handleSubmit = (value: { newPost: string }) => {
    props.addPostAC(value.newPost);
    
  };
  
  return (
    <div>
      <div>
        <h3>Profile</h3>
      </div>
      <div className="user-info">
        <ProfileInfo profile={props.profile} status={props.statusUser} setStatusUserThunk={props.setStatusUserThunk}/>
      </div>
      <div>
        <div>
          <AddNewPost onSubmit={handleSubmit}/>
        </div>
        <div>Posts:</div>
        <div className="posts-container">
          {props.userPosts.map(p => <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            addLikeCallback={addLikeHandler}/>)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
