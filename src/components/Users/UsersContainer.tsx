import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followFriendAC, setUsersAC, unFollowFriendAC} from "../../redux/actions/usersAC";
import {UserType} from "../../redux/reducers/users-reducer";
import UsersClass from './UsersClass';

const mapStateToProps = (state: AppStateType) => {
  return {
    items: state.usersPage.items
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUsersCallback: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
    followFriendCallback: (id: number) => {
      dispatch(followFriendAC(id));
    },
    unFollowFriendCallback: (id: number) => {
      dispatch(unFollowFriendAC(id));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
