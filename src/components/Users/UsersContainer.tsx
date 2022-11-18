import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
  changeUsersPageAC,
  followFriendAC, isDisabledButtonAC,
  setUsersAC, toggleIsFetchingAC,
  unFollowFriendAC,
} from "../../redux/actions/usersAC";
import Users from "./Users";
import {UsersClassPropsType} from './types/TUsersContainer';
import {UsersType} from '../../redux/reducers/types/TUsers';
import {usersAPI} from "../../api/api";

class UserContainer extends React.Component<UsersClassPropsType> {
  
  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageRenderUserSize).then(data => {
      this.props.setUsersAC(data.items, data.totalCount);
      this.props.toggleIsFetchingAC(false);
    });
  }
  
  
  followHandler = (id: number) => {
    this.props.followFriendAC(id);
  };
  unFollowHandler = (id: number) => {
    this.props.unFollowFriendAC(id);
  };
  isDisabledButtonHandler = (userId: number, isDisabled: boolean) => {
    this.props.isDisabledButtonAC(userId, isDisabled);
  };
  onChangePage = (pageNumber: number) => {
    this.props.changeUsersPageAC(pageNumber);
    this.props.toggleIsFetchingAC(true);
    usersAPI.getUsers(pageNumber, this.props.pageRenderUserSize).then(data => {
      this.props.setUsersAC(data.items, data.totalCount);
      this.props.toggleIsFetchingAC(false);
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
                  isDisabledButtonHandler={this.isDisabledButtonHandler}
                  isFetching={this.props.isFetching}
                  isDisabledButton={this.props.isDisabledButton}
    />;
  }
}


const mapStateToProps = (state: AppStateType): UsersType => {
  return {
    items: state.usersPage.items,
    currentPage: state.usersPage.currentPage,
    pageRenderUserSize: state.usersPage.pageRenderUserSize,
    totalUserCount: state.usersPage.totalUserCount,
    isFetching: state.usersPage.isFetching,
    isDisabledButton: state.usersPage.isDisabledButton
  };
};


const UsersContainer = connect(mapStateToProps, {
  setUsersAC,
  followFriendAC,
  unFollowFriendAC,
  changeUsersPageAC,
  toggleIsFetchingAC,
  isDisabledButtonAC
})(UserContainer);

export default UsersContainer;
