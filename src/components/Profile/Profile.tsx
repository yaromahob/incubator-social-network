import React from 'react';
import './Profile.css'
import Post from "../Post/Post";


const Profile: React.FC = () => {
  
  return (
    
    <div>
      <div>
        <h3>Profile</h3>
      </div>
      <div className='user-info'>
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
          <input type="text"/>
          <button>Send</button>
        </div>
        <div>Posts:</div>
        <div className='posts-container'>
          <Post message='Hello, how are you?' likesCount={0}/>
          <Post message="It's my first post" likesCount={23}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;
