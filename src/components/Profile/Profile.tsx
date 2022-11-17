import React, {ChangeEvent} from 'react';
import './Profile.css';
import Post from "../Post/Post";
import {TStatePostType} from './types/TProfile';


const Profile: React.FC<TStatePostType> = (props) => {
  const postHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.updatePostCallback(e.target.value);
  };
  
  const addPostHandler = () => {
    props.addPostCallback(props.newPost);
  };
  
  const addLikeHandler = (id: string) => {
    props.addLikeCallback(id);
  };
  
  return (
    <div>
      <div>
        <h3>Profile</h3>
      </div>
      <div className="user-info">
        <div><img src="https://www.svgrepo.com/show/5125/avatar.svg" alt="avatar svg"/></div>
        <ul>
          <li>Status: I'm working on it</li>
          <li>Soname: Ivanov</li>
          <li>Name: Ivan</li>
          <li>Age: 88</li>
          <li>Sex: Man</li>
        </ul>
      </div>
      <div>
        <div>
          
          <p>Writing your post</p>
          <input type="text" value={props.newPost} onChange={postHandler}/>
          <button onClick={addPostHandler}>Send</button>
        </div>
        <div>Posts:</div>
        <div className="posts-container">
          {props.postUser.map(p => <Post
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
