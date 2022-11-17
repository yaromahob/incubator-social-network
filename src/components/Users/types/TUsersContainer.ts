import {UsersType, UserType} from "../../../redux/reducers/users-reducer";

export type mapDispatchToPropsType = {
  setUsersCallback: (users: Array<UserType>, totalUsersCount: number) => void
  followFriendCallback: (userID: number) => void
  unFollowFriendCallback: (userID: number) => void
  onChangePageCallback: (number: number) => void
}
export type UsersClassPropsType = mapDispatchToPropsType & UsersType