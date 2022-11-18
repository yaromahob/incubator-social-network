import {TProfileResponse} from "../reducers/types/TProfile";

export const addPostAC = (message: string) => {
  return {
    type: 'ADD-POST',
    payload: message
  } as const;
};

export const updatePostTextAC = (text: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    payload: text
  } as const;
};

export const addLikePostAC = (id: string) => {
  return {
    type: 'ADD-LIKE',
    payload: id
  } as const;
};

export const setProfileAC = (profile: TProfileResponse) => {
  return {
    type: 'SET-USER-PROFILE',
    payload: profile
  } as const;
};
