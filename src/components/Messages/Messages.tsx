import React from 'react';
import Dialogs from "../Dialogs/Dialogs";
import {StateUserDataType} from './types/TMessages';
import WithAuthRedirect from "../HOC/WithAuthRedirect";


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
let MessagesAuthRedirect = WithAuthRedirect(Messages);

export default MessagesAuthRedirect;
