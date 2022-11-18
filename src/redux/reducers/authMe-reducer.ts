import {ActionsAuthTypes, AuthDataType} from "../actions/types/TAuth";

export const SET_USER_DATA = 'SET-USER-DATA';

const initialState: AuthDataType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state: AuthDataType = initialState, action: ActionsAuthTypes): AuthDataType => {
  switch (action.type) {
    case "SET-USER-DATA": {
      return {
        ...state,
        ...action.payload.data,
        isAuth: true
      };
    }
    default: {
      return state;
    }
  }
};