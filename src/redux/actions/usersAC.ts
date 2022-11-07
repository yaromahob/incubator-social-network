import {UsersType, UserType} from "../reducers/users-reducer";

export type UsersActionType = FollowFriendACType | UnFollowFriendACType | SetUsersACType

type FollowFriendACType = ReturnType<typeof followFriendAC>
type UnFollowFriendACType = ReturnType<typeof unFollowFriendAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

const SET_USERS = 'SET-USERS';
const FOLLOW_FRIEND = 'FOLLOW-FRIEND';
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND';

export const setUsersAC = (users: Array<UserType>) => {
  return {
    type: SET_USERS,
    payload: users
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
