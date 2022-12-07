import React, {ChangeEvent} from 'react';
import './Profile.css';
import Post from "../../Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {TProfile} from "../types/TProfile";


const Profile: React.FC<TProfile> = (props) => {
  const postHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.updatePostTextAC(e.target.value);
  };
  
  const addPostHandler = () => {
    props.addPostAC(props.newPost);
  };
  
  const addLikeHandler = (id: string) => {
    props.addLikePostAC(id);
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
          
          <p>Writing your post</p>
          <input type="text" value={props.newPost} onChange={postHandler}/>
          <button onClick={addPostHandler}>Send</button>
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
