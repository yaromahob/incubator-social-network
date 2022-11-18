import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC} from "../../redux/actions/setAuthUserDataAC";
import {AuthDataType} from "../../redux/reducers/types/TAuth";
import {AuthClassPropsType} from "./types/THeaderContainer";

class HeaderContainer extends React.Component<AuthClassPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        this.props.setAuthUserDataAC(id, email, login);
      }
    });
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

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);