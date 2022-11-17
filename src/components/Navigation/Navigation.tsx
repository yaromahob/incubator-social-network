import React from 'react';
import {NavLink} from "react-router-dom";
import {TSidebarMenu} from '../../redux/reducers/types/TSidebar_reducer';
import './Navigation.css';
import {SidebarMenuPropsType} from './types/TNavigation';


const Navigation: React.FC<SidebarMenuPropsType> = (props) => {
  
  
  return (
    
    <nav>
      <ul>
        {props.sidebarMenu.map((item: TSidebarMenu, index: number) => {
          return (
            <li key={index}>
              <NavLink
                className={(isActive) => isActive ? 'active' : ''}
                to={item.directory}>
                {item.folder}
              </NavLink>
            </li>);
        })}
      
      </ul>
    
    
    </nav>
  
  
  );
};

export default Navigation;