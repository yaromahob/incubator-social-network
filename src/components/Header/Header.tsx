import React from 'react';
import logo from "../../assets/logo192.png";
import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import {HeaderType} from "./types/THeader";

const Header: React.FC<HeaderType> = (props) => {
  return (
    <header>
      <div className="logo-wrapper">
        <img src={logo} alt="logo"/>
        <h1>New Social Network</h1>
      </div>
      <div className={styles.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>
          Login
        </NavLink>}
      </div>
    </header>);
};

export default Header;