import React from 'react';

import {Link} from "react-router-dom";
import './dialogs.css';
import {UserDataType} from "../Messages/types/TMessages";
import {TUserData} from '../../Dataset/users';

const Dialogs: React.FC<UserDataType> = (props) => {
  const [activeUser, setActiveUser] = React.useState('');
  
  const onChangeActiveUser = (index: number) => {
    setActiveUser(props.userData[index].directory);
  };
  const messages = props.userMessages.map(m => <p key={m.id}>{m.message}</p>);
  const dialogs = props.userData.map((obj: TUserData, index: number) => {
    return (
      <li key={index}>
        <img src={obj.avatar} alt="avatar"/>
        <Link
          className={activeUser === obj.directory ? 'active' : ''}
          onClick={() => onChangeActiveUser(index)}
          to={'/messages' + obj.directory}>
          {obj.user}
        </Link>
      </li>);
  });
  return (
    <div className="dialogs">
      <div>
        <h3>Dialogs:</h3>
      </div>
      <div className="dialogsWrapper">
        <div className="users">
          <ul>
            {dialogs}
          </ul>
        </div>
        <div className="messages">
          {messages}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
