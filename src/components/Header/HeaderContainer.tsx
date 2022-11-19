import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/actions/setAuthUserDataAC";
import {AuthDataType} from "../../redux/actions/types/TAuth";
import {AuthClassPropsType} from "./types/THeaderContainer";
import {authMeThunk} from "../../redux/asyncActions/getUsersThunk";

class HeaderContainer extends React.Component<AuthClassPropsType> {
  componentDidMount() {
    this.props.authMeThunk();
  }
  
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
  }
}

const mapStateToProps = (state: AppStateType): AuthDataType => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {setAuthUserDataAC, authMeThunk})(HeaderContainer);