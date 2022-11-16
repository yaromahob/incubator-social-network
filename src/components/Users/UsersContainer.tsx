import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
  changeUsersPageAC,
  followFriendAC,
  setUsersAC,
  unFollowFriendAC,
  UsersActionType
} from "../../redux/actions/usersAC";
import {UsersType, UserType} from "../../redux/reducers/users-reducer";
import axios from "axios";
import Users from "./Users";

class UserContainer extends React.Component<UsersClassPropsType> {
  
  componentDidMount() {
    console.log(this.props.currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageRenderUserSize}`).then(response => {
      this.props.setUsersCallback(response.data.items, response.data.totalCount);
    });
  }
  
  
  followHandler = (id: number) => {
    this.props.followFriendCallback(id);
  };
  unFollowHandler = (id: number) => {
    this.props.unFollowFriendCallback(id);
  };
  onChangePage = (pageNumber: number) => {
    this.props.onChangePageCallback(pageNumber);
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageRenderUserSize}`).then(response => {
      this.props.setUsersCallback(response.data.items, response.data.totalCount);
    });
    
  };
  
  render() {
    
    return <Users items={this.props.items}
                  totalUserCount={this.props.totalUserCount}
                  currentPage={this.props.currentPage}
                  pageRenderUserSize={this.props.pageRenderUserSize}
                  onChangePage={this.onChangePage}
                  unFollowHandler={this.unFollowHandler}
                  followHandler={this.followHandler}
    />;
    
  }
}


export type mapDispatchToPropsType = {
  setUsersCallback: (users: Array<UserType>, totalUsersCount: number) => void
  followFriendCallback: (userID: number) => void
  unFollowFriendCallback: (userID: number) => void
  onChangePageCallback: (number: number) => void
}

const mapStateToProps = (state: AppStateType): UsersType => {
  return {
    items: state.usersPage.items,
    currentPage: state.usersPage.currentPage,
    pageRenderUserSize: state.usersPage.pageRenderUserSize,
    totalUserCount: state.usersPage.totalUserCount
  };
};

export type UsersClassPropsType = mapDispatchToPropsType & UsersType

const mapDispatchToProps = (dispatch: Dispatch<UsersActionType>): mapDispatchToPropsType => {
  return {
    setUsersCallback: (users: Array<UserType>, totalUsersCount: number) => {
      dispatch(setUsersAC(users, totalUsersCount));
    },
    followFriendCallback: (userID: number) => {
      dispatch(followFriendAC(userID));
    },
    unFollowFriendCallback: (userID: number) => {
      dispatch(unFollowFriendAC(userID));
    },
    onChangePageCallback: (pageNumber: number) => {
      dispatch(changeUsersPageAC(pageNumber));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UsersContainer;
