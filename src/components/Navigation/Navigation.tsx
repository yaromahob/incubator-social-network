import React from 'react'
import {Link} from "react-router-dom";
import './Navigation.css'
import {navigationData} from "./navigationData";
import {TNavigationData} from "./TNavigationData";

const Navigation: React.FC = () => {
  const [activeDirectory, setActiveDirectory] = React.useState('/profile')
  
  const onChangeFolder = (index: number) => {
    
    setActiveDirectory(navigationData[index].directory)
  }
  
  return (
    
    <nav>
      <ul>
        {navigationData.map((item: TNavigationData, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => onChangeFolder(index)}
                className={activeDirectory === item.directory ? 'active' : ''}
                to={item.directory}>
                {item.folder}
              </Link>
            </li>)
        })}
      
      </ul>
    
    
    </nav>
  
  
  )
}

export default Navigation