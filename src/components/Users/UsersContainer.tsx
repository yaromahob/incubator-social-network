import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import Users from "./Users";
import {UsersClassPropsType} from './types/TUsersContainer';
import {UsersType} from '../../redux/reducers/types/TUsers';
import {unFollowSuccessThunk, getUsersThunk, followSuccessThunk} from "../../redux/asyncActions/getUsersThunk";

class UserContainer extends React.Component<UsersClassPropsType> {
  
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageRenderUserSize);
    
  }
  
  onChangePage = (pageNumber: number) => {
    this.props.getUsersThunk(pageNumber, this.props.pageRenderUserSize);
  };
  
  
  unFollowSuccessThunkHandler = (userID: number) => {
    this.props.unFollowSuccessThunk(userID);
  };
  
  followSuccessThunkHandler = (userID: number) => {
    this.props.followSuccessThunk(userID);
  };
  
  
  render() {
    return <Users items={this.props.items}
                  totalUserCount={this.props.totalUserCount}
                  currentPage={this.props.currentPage}
                  pageRenderUserSize={this.props.pageRenderUserSize}
                  onChangePage={this.onChangePage}
                  followSuccessThunkHandler={this.followSuccessThunkHandler}
                  unFollowSuccessThunkHandler={this.unFollowSuccessThunkHandler}
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
  getUsersThunk,
  unFollowSuccessThunk,
  followSuccessThunk
})(UserContainer);

export default UsersContainer;
