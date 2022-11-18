import {UsersType, UserType} from "../../../redux/reducers/types/TUsers";


export type mapDispatchToPropsType = {
  setUsersAC: (users: Array<UserType>, totalUsersCount: number) => void
  followFriendAC: (userID: number) => void
  unFollowFriendAC: (userID: number) => void
  changeUsersPageAC: (number: number) => void
  toggleIsFetchingAC: (fetchResult: boolean) => void
}
export type UsersClassPropsType = mapDispatchToPropsType & UsersType