import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
});

const WithAuthRedirect = (Component: any) => {
  class AuthRedirect extends React.Component<any, any> {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login"/>;
      return <Component {...this.props}/>;
    }
  }
  
  
  return connect(mapStateToPropsForRedirect)(AuthRedirect);
};

export default WithAuthRedirect;



