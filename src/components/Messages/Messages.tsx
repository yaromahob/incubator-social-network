import React from 'react';
import Dialogs from "../Dialogs/Dialogs";
import {StateUserDataType} from './types/TMessages';


const Messages: React.FC<StateUserDataType> = (props) => {
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
