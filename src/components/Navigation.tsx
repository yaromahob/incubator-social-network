import React from 'react'
import {Link} from "react-router-dom";
import '../styles/Navigation.css'

const Navigation: React.FC = () => {
  
  
  return (
    
    <nav>
      <ul>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/messages'>Messages</Link></li>
        <li><Link to='/music'>Music</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    
    
    </nav>
  
  
  )
}

export default Navigation