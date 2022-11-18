import {UsersType, UserType} from "../../../redux/reducers/types/TUsers";
import {isDisabledButtonAC} from "../../../redux/actions/usersAC";


export type mapDispatchToPropsType = {
  setUsersAC: (users: Array<UserType>, totalUsersCount: number) => void
  followFriendAC: (userID: number) => void
  unFollowFriendAC: (userID: number) => void
  changeUsersPageAC: (number: number) => void
  toggleIsFetchingAC: (fetchResult: boolean) => void
  isDisabledButtonAC: (userId: number, isDisabled: boolean) => void
}
export type UsersClassPropsType = mapDispatchToPropsType & UsersType