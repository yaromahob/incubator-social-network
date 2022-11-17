import React from 'react';
import './post.css';
import {TPostPropsType} from './types/TPost';


const Post = (props: TPostPropsType) => {
  const addLikeHandler = () => {
    props.addLikeCallback(props.id);
  };
  return (
    <div className="postWrapper">
      <div className="user-info">
        
        <img src="https://www.svgrepo.com/show/5125/avatar.svg" alt="avatar svg"/>
      
      </div>
      {props.message}
      <div className="likes-wrapper">
        <img onClick={addLikeHandler} src="https://www.svgrepo.com/show/84195/like.svg" alt="likes image"/>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
