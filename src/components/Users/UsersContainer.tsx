import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
  changeUsersPageAC,
  followFriendAC,
  setUsersAC, toggleIsFetchingAC,
  unFollowFriendAC,
} from "../../redux/actions/usersAC";
import axios from "axios";
import Users from "./Users";
import {UsersClassPropsType} from './types/TUsersContainer';
import {UsersType} from '../../redux/reducers/types/TUsers';

class UserContainer extends React.Component<UsersClassPropsType> {
  
  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageRenderUserSize}`, {withCredentials: true}).then(response => {
      this.props.setUsersAC(response.data.items, response.data.totalCount);
      this.props.toggleIsFetchingAC(false);
    });
  }
  
  
  followHandler = (id: number) => {
    this.props.followFriendAC(id);
  };
  unFollowHandler = (id: number) => {
    this.props.unFollowFriendAC(id);
  };
  onChangePage = (pageNumber: number) => {
    this.props.changeUsersPageAC(pageNumber);
    this.props.toggleIsFetchingAC(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageRenderUserSize}`, {withCredentials: true}).then(response => {
      this.props.setUsersAC(response.data.items, response.data.totalCount);
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
                  isFetching={this.props.isFetching}
    />;
  }
}


const mapStateToProps = (state: AppStateType): UsersType => {
  return {
    items: state.usersPage.items,
    currentPage: state.usersPage.currentPage,
    pageRenderUserSize: state.usersPage.pageRenderUserSize,
    totalUserCount: state.usersPage.totalUserCount,
    isFetching: state.usersPage.isFetching
  };
};


const UsersContainer = connect(mapStateToProps, {
  setUsersAC,
  followFriendAC,
  unFollowFriendAC,
  changeUsersPageAC,
  toggleIsFetchingAC
})(UserContainer);

export default UsersContainer;
