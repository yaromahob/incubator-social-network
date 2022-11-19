import React from 'react';
import {NavLink} from "react-router-dom";
import {TSidebarMenu} from '../../redux/reducers/types/TSidebar';
import styles from './Navigation.module.css';
import {SidebarMenuPropsType} from './types/TNavigation';


const Navigation: React.FC<SidebarMenuPropsType> = (props) => {
  return (
    
    <nav className={styles.sidebarMenu}>
      <ul>
        {props.sidebarMenu.map((item: TSidebarMenu, index: number) => {
          return (
            <li key={index}>
              <NavLink
                className={(isActive) => isActive ? styles.active : ''}
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