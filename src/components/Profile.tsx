import React from 'react';
import '../styles/Profile.css'


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
        <div>Posts:</div>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
