import React from 'react';
import {v1} from 'uuid';
import {TProfileInfoPropsType} from "./types/TProfileInfo";


const ProfileInfo: React.FC<TProfileInfoPropsType> = (props) => {
  const userSocialsNetworks = Object.keys(props.profile.contacts);
  const userSocialsNetworksLinks = Object.values(props.profile.contacts);
  const renderContacts = userSocialsNetworksLinks.filter(l => l !== null);
  const contacts = userSocialsNetworksLinks.map((l, i) => l !== null
    ? <li key={v1()}>{`${userSocialsNetworks[i]}: ${l}`}</li>
    : null);
  
  return (
    <>
      <div className="profileAvatar">
        <img
          src={props.profile.photos.large ? props.profile.photos.large : "https://www.svgrepo.com/show/5125/avatar.svg"}
          alt="avatar"/>
        {/*<img src="https://www.svgrepo.com/show/5125/avatar.svg" alt="avatar svg"/>*/}
      </div>
      <div className="aboutUser">
        <ul>
          <li>About Me: {props.profile.aboutMe}</li>
          <li>Full Name: {props.profile.fullName}</li>
        </ul>
      </div>
      <div className="contactsUser">
        Contacts:
        <ul>
          {renderContacts.length === 0 ? <li>User didn't write about websites</li> :
            contacts
          }
        </ul>
      </div>
      <div className="lookingJob">
        <h4>Looking for a job: </h4>
        <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
      </div>
    
    </>
  );
};

export default ProfileInfo;
