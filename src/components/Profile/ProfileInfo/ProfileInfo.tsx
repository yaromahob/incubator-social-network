import React, {ChangeEvent, useEffect} from 'react';
import {v1} from 'uuid';
import {TProfileInfoPropsType} from "../types/TProfileInfo";
import './ProfileInfo.css';
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo: React.FC<TProfileInfoPropsType> = (props) => {
  const [status, setStatus] = React.useState(props.status);
  const [onEdit, setOnEdit] = React.useState(false);
  const userSocialsNetworks = Object.keys(props.profile.contacts);
  const userSocialsNetworksLinks = Object.values(props.profile.contacts);
  const renderContacts = userSocialsNetworksLinks.filter(l => l !== null);
  const contacts = userSocialsNetworksLinks.map((l, i) => l !== null
    ? <li key={v1()}>
      {
        `${userSocialsNetworks[i]}: ${l}`
      }
    </li>
    : null);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  
  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const editModeHandler = (onEdit: boolean) => {
    setOnEdit(onEdit);
    
    if (!onEdit) {
      props.setStatusUserThunk(status);
    }
  };
  return (
    <>
      <div className="userInfoWrapper">
        <div className="aboutUserWrapper">
          <div className="profileAvatar">
            <img
              src={props.profile.photos.large ? props.profile.photos.large : "https://www.svgrepo.com/show/5125/avatar.svg"}
              alt="avatar"/>
          </div>
          <div className="aboutUser">
            <ul>
              <li>About Me: {props.profile.aboutMe}</li>
              <li>Full Name: {props.profile.fullName}</li>
            </ul>
          </div>
        </div>
        <div className="contactsWrapper">
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
        </div>
      </div>
      <ProfileStatus status={status}
                     onEdit={onEdit}
                     changeStatus={changeStatus}
                     editModeHandler={editModeHandler}
      />
    </>
  );
};

export default ProfileInfo;
