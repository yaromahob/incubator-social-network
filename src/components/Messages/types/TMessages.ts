import {TUserData} from "../../../Dataset/users";
import {TUserMessages} from "../../../redux/reducers/messages-reducer";

export type UserDataType = {
  userData: TUserData[]
  userMessages: TUserMessages[]
}
export type StateUserDataType = {
  state: UserDataType
}