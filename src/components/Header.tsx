import React from 'react'
import logo from "../assets/logo192.png";

const Header: React.FC = () => {
  return (
    <header className='header-wrapper'>
      <img src={logo} alt="logo"/>
      <h1>New Social Network</h1>
    </header>)
}

export default Header