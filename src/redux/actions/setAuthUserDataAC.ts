import {SET_USER_DATA} from "../reducers/authMe-reducer";

export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
  return {
    type: SET_USER_DATA,
    payload: {
      data: {userId, email, login}
    }
  } as const;
};