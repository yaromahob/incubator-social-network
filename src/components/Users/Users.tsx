import React from 'react';
import {v1} from "uuid";
import {UsersComponentType} from './types/TUsers';
import './users.css';
import Preloader from "../common/Preloader/Preloader";


const Users: React.FC<UsersComponentType> = ({
                                               items,
                                               totalUserCount,
                                               currentPage,
                                               pageRenderUserSize,
                                               onChangePage,
                                               unFollowHandler,
                                               followHandler,
                                               isFetching
                                             }) => {
  
  // чтобы не высчитывать 2000+ страниц временная заглушка все USERS сидят в totalUserCount
  
  const totalPages = 50 / pageRenderUserSize;
  const activePage = currentPage;
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  
  const followHandlerHandler = (userID: number) => {
    followHandler(userID);
  };
  
  const unFollowHandlerHandler = (userID: number) => {
    unFollowHandler(userID);
  };
  
  
  return (
    <div>
      <h3>Users</h3>
      
      <div className="items-wrapper">
        
        <div className="paginationPage">
          <ul>
            {pages.map(p => <li
              key={v1()}
              className={activePage === p ? 'selected' : ''}
              onClick={() => onChangePage(p)}
            >{p}</li>)}
          </ul>
          {isFetching ? <Preloader/> : null}
        </div>
        <div className="users-wrapper">
          
          
          {items.map((u) => {
              
              
              return (
                <div className="user" key={u.id}>
                  <div className="userName">
                    <img src={u.photos.small === null
                      ? 'https://www.svgrepo.com/show/57853/avatar.svg'
                      : u.photos.small}
                         alt="AVATAR"/>
                    <h3>{u.name}</h3>
                    {u.followed
                      ? <button className="unfollow" onClick={() => unFollowHandlerHandler(u.id)}>Unfollow</button>
                      : <button className="follow" onClick={() => followHandlerHandler(u.id)}>Follow</button>}
                  </div>
                  <div className="aboutPerson">
                    <p>{u.status}</p>
                  </div>
                </div>
              );
            }
          )}
        
        
        </div>
      </div>
    </div>);
};

export default Users;

