import React from 'react';
import Dialogs from "../Dialogs/Dialogs";
import {TUserData, TUserMessages} from "../../redux/state";

export type TUserDataType = {
	userData: TUserData[]
	userMessages: TUserMessages[]
}


const Messages: React.FC<TUserDataType> = (props) => {
	return (
		<div>
			<div>
				<h3>Messages</h3>
			</div>
			<Dialogs userData={props.userData} userMessages={props.userMessages}/>
		</div>
	);
};

export default Messages;
