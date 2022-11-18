import {UserType} from "../reducers/types/TUsers";


export const SET_USERS = 'SET-USERS';
export const FOLLOW_FRIEND = 'FOLLOW-FRIEND';
export const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND';
export const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
export const IS_DISABLED_BUTTON = "IS_DISABLED_BUTTON";

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

export const toggleIsFetchingAC = (fetchResult: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: fetchResult
  } as const;
};

export const isDisabledButtonAC = (userId: number, isDisabled: boolean) => {
  return {
    type: IS_DISABLED_BUTTON,
    payload: {
      isDisabled,
      userId
    }
  } as const;
};