import {UsersType, UserType} from "../../../redux/reducers/types/TUsers";
import {isDisabledButtonAC} from "../../../redux/actions/usersAC";
import {unFollowSuccessThunk, getUsersThunk} from "../../../redux/asyncActions/getUsersThunk";


export type mapDispatchToPropsType = {
  // setUsersAC: (users: Array<UserType>, totalUsersCount: number) => void
  // toggleIsFetchingAC: (fetchResult: boolean) => void
  
  getUsersThunk: (currentPage: number, pageRenderUserSize: number) => void
  unFollowSuccessThunk: (userID: number) => void
  followSuccessThunk: (userID: number) => void
}
export type UsersClassPropsType = mapDispatchToPropsType & UsersType