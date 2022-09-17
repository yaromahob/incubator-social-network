import React from 'react';
import Dialogs from "../Dialogs/Dialogs";
import {userData} from "./userData";

const Messages: React.FC = () => {
  return (
    <div>
      <div>
        <h3>Messages</h3>
      </div>
      <Dialogs userData={userData}/>
    </div>
  );
};

export default Messages;
