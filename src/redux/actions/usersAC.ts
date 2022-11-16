import {UsersType, UserType} from "../reducers/users-reducer";

export type UsersActionType = FollowFriendACType | UnFollowFriendACType | SetUsersACType | ChangeUsersPageAC

type FollowFriendACType = ReturnType<typeof followFriendAC>
type UnFollowFriendACType = ReturnType<typeof unFollowFriendAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type ChangeUsersPageAC = ReturnType<typeof changeUsersPageAC>

const SET_USERS = 'SET-USERS';
const FOLLOW_FRIEND = 'FOLLOW-FRIEND';
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';

export const setUsersAC = (users: Array<UserType>, totalUsersCount: number) => {
  return {
    type: SET_USERS,
    payload: {
      users,
      totalUsersCount
    }
  } as const;
};

export const changeUsersPageAC = (pageNumber: number) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    payload: {
      pageNumber
    }
  } as const;
};

export const followFriendAC = (id: number) => {
  return {
    type: FOLLOW_FRIEND,
    payload: id
  } as const;
};
export const unFollowFriendAC = (id: number) => {
  return {
    type: UNFOLLOW_FRIEND,
    payload: id
  } as const;
};
