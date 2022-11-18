import {usersAPI} from "../../api/api";
import {
  changeUsersPageAC, followFriendAC,
  isDisabledButtonAC,
  setUsersAC,
  toggleIsFetchingAC,
  unFollowFriendAC
} from "../actions/usersAC";
import {Dispatch} from "redux";
import {AppActionsType, AppThunk} from "../redux-store";

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
