import React from 'react';
import {TUserData} from '../../Dataset/users';
import {TUserMessages} from '../../redux/reducers/messages-reducer';
import Dialogs from "../Dialogs/Dialogs";

export type TUserDataType = {
  userData: TUserData[]
  userMessages: TUserMessages[]
}
type TStateUserData = {
  state: TUserDataType
}


const Messages: React.FC<TStateUserData> = (props) => {
  return (
    <div>
      <div>
        <h3>Messages</h3>
      </div>
      <Dialogs userData={props.state.userData} userMessages={props.state.userMessages}/>
    </div>
  );
};

export default Messages;
