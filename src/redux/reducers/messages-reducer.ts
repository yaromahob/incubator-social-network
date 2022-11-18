import {v1} from "uuid";
import {USERS_DATA} from "../../Dataset/users";
import {TMessagesPage} from "./types/TMessages";


const initialState: TMessagesPage = {
  userData: [...USERS_DATA],
  userMessages: [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'I am fine and you?'},
    {id: v1(), message: 'I am fine too. What you do?'},
    {id: v1(), message: 'Nothing and you?'},
    {id: v1(), message: 'I am going home. '},
  ],
};

export const messagesReducer = (state: any = initialState, action: any): TMessagesPage => {
  return state;
};