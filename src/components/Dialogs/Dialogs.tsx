import React from 'react';
import {TUserData, TUserDataType} from "../Messages/TUserData";
import {Link} from "react-router-dom";
import './dialogs.css'

const Dialogs = (props: TUserDataType) => {
  const [activeUser, setActiveUser] = React.useState('')
  
  const onChangeActiveUser = (index: number) => {
    setActiveUser(props.userData[index].directory)
  }
  
  return (
    <div className='dialogs'>
      <div>
        <h3>Dialogs:</h3>
      </div>
      <div className="dialogsWrapper">
        <div className="users">
          <ul>
            {props.userData.map((obj: TUserData, index: number) => {
              return (
                <li key={index}>
                  <Link
                    className={activeUser === obj.directory ? 'active' : ''}
                    onClick={() => onChangeActiveUser(index)}
                    to={'/messages' + obj.directory}>
                    {obj.user}
                  </Link>
                </li>)
            })}
          </ul>
        </div>
        <div className="messages">
          <p>One One One</p>
          <p>Two Two Two</p>
          <p>Three Three Three</p>
          <p>Four Four Four</p>
          <p>Five Five Five</p>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
