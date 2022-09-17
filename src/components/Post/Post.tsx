import React from 'react';
import './post.css'
import {TPostPropsType} from "./TPostType";


const Post = (props: TPostPropsType) => {
  return (
    <div className='postWrapper'>
      <div className='user-info'>
        
        <img src="https://www.svgrepo.com/show/5125/avatar.svg" alt="avatar svg"/>
      
      </div>
      {props.message}
      <div className='likes-wrapper'>
        <img src="https://www.svgrepo.com/show/84195/like.svg" alt="likes image"/>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
