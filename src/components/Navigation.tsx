import React from 'react'
import {Link} from "react-router-dom";

const Navigation: React.FC = () => {
  
  
  return (
    
    <nav>
      <ul>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/messages'>Messages</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/music'>Music</Link></li>
      </ul>
    
    
    </nav>
  
  
  )
}

export default Navigation