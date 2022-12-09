import {profileAPI, usersAPI} from "../../api/api";
import {
  changeUsersPageAC, followFriendAC,
  isDisabledButtonAC,
  setUsersAC,
  toggleIsFetchingAC,
  unFollowFriendAC
} from "../actions/usersAC";
import {Dispatch} from "redux";
import {AppActionsType, AppThunk} from "../redux-store";
import {getStatusAC, setProfileAC, setStatusAC} from "../actions/profileAC";
import {setAuthUserDataAC} from "../actions/setAuthUserDataAC";

export const getUsersThunk = (currentPage: number, pageRenderUserSize: number): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(changeUsersPageAC(currentPage));
    usersAPI.getUsers(currentPage, pageRenderUserSize).then(data => {
      dispatch(setUsersAC(data.items, data.totalCount));
      dispatch(toggleIsFetchingAC(false));
    });
  };
};

export const followSuccessThunk = (userID: number): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(isDisabledButtonAC(userID, true));
    usersAPI.followUsers(userID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followFriendAC(userID));
        dispatch(isDisabledButtonAC(userID, false));
      }
      
    });
  };
};

export const unFollowSuccessThunk = (userID: number): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    dispatch(isDisabledButtonAC(userID, true));
    usersAPI.unFollowUsers(userID).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unFollowFriendAC(userID));
        dispatch(isDisabledButtonAC(userID, false));
      }
    });
  };
};

export const getProfileUserThunk = (userID: number): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    usersAPI.getProfileUser(userID).then(response => {
      dispatch(setProfileAC(response.data));
    });
  };
};

export const authMeThunk = (): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    usersAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserDataAC(id, email, login));
      }
    });
  };
};

export const getStatusUserThunk = (userID: number): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    profileAPI.getStatusUser(userID).then(response => {
      dispatch(getStatusAC(response.data));
    });
  };
};

export const setStatusUserThunk = (status: string): AppThunk => {
  return (dispatch: Dispatch<AppActionsType>) => {
    profileAPI.updateStatus(status).then(response => {
      console.log(response);
      if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
  };
};