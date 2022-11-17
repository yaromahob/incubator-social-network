import {UsersType, UserType} from "../../../redux/reducers/types/TUsers_reducer";


export type mapDispatchToPropsType = {
  setUsersCallback: (users: Array<UserType>, totalUsersCount: number) => void
  followFriendCallback: (userID: number) => void
  unFollowFriendCallback: (userID: number) => void
  onChangePageCallback: (number: number) => void
  toggleIsFetchingCallback: (fetchResult: boolean) => void
}
export type UsersClassPropsType = mapDispatchToPropsType & UsersType