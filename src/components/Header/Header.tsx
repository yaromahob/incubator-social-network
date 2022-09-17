import React from 'react'
import logo from "../../assets/logo192.png";

const Header: React.FC = () => {
  return (
    <header>
      <div className='logo-wrapper'>
        <img src={logo} alt="logo"/>
        <h1>New Social Network</h1>
      </div>
      <div>
        <button>Settings</button>
      </div>
    </header>)
}

export default Header