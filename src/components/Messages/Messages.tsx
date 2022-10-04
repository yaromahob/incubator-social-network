import React from 'react';
import Dialogs from "../Dialogs/Dialogs";
import {TUserData, TUserMessages} from "../../redux/state";

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
