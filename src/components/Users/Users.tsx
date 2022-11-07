import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import './users.css';
import {v1} from "uuid";
import axios from "axios";

export type UsersType = {
  items: Array<UserType>
  setUsersCallback: (users: Array<UserType>) => void
  followFriendCallback: (id: number) => void
  unFollowFriendCallback: (id: number) => void
}

const Users = (props: UsersType) => {
  // props.setUsersCallback([
  //   {
  //     id: v1(),
  //     fullName: 'Dimych',
  //     status: 'Nice to meet you',
  //     location: {city: 'Minsk', country: 'Belarus'},
  //     followed: true,
  //     avatar: 'https://www.svgrepo.com/show/92403/avatar.svg'
  //   },
  //   {
  //     id: v1(),
  //     fullName: 'Andrey',
  //     status: 'Can you write me?',
  //     location: {city: 'Minsk', country: 'Belarus'},
  //     followed: false,
  //     avatar: 'https://www.svgrepo.com/show/43652/avatar.svg'
  //   },
  //   {
  //     id: v1(),
  //     fullName: 'Sveta',
  //     status: 'Hello everyone',
  //     location: {city: 'Minsk', country: 'Belarus'},
  //     followed: true,
  //     avatar: 'https://www.svgrepo.com/show/79566/avatar.svg'
  //   },
  //   {
  //     id: v1(),
  //     fullName: 'Sasha',
  //     status: 'I am studying',
  //     location: {city: 'Minsk', country: 'Belarus'},
  //     followed: false,
  //     avatar: 'https://www.svgrepo.com/show/61986/avatar.svg'
  //   },
  //   {
  //     id: v1(),
  //     fullName: 'Viktor',
  //     status: 'I am teaching you React',
  //     location: {city: 'Minsk', country: 'Belarus'},
  //     followed: false,
  //     avatar: 'https://www.svgrepo.com/show/63886/avatar.svg'
  //   },
  //   {
  //     id: v1(),
  //     fullName: 'Valera',
  //     status: 'See you on Wednesday',
  //     location: {city: 'Minsk', country: 'Belarus'},
  //     followed: false,
  //     avatar: 'https://www.svgrepo.com/show/57853/avatar.svg'
  //   },]);
  let data;
  if (props.items.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
      props.setUsersCallback(responce.data.items);
    });
  }
  
  const followHandler = (id: number) => {
    props.followFriendCallback(id);
  };
  const unFollowHandler = (id: number) => {
    props.unFollowFriendCallback(id);
  };
  
  const users = props.items.map(u => {
      console.log(typeof u.id);
      return <div className="user" key={u.id}>
        <div className="userName">
          <img src={u.photos.small === null
            ? 'https://www.svgrepo.com/show/57853/avatar.svg'
            : u.photos.small}
               alt="AVATAR"/>
          <h3>{u.name}</h3>
          {u.followed
            ? <button className="unfollow" onClick={() => unFollowHandler(u.id)}>Unfollow</button>
            : <button className="follow" onClick={() => followHandler(u.id)}>Follow</button>}
        </div>
        <div className="aboutPerson">
          <p>{u.status}</p>
          {/*<div className="location-user">*/}
          {/*  <h4>Location:</h4>*/}
          {/*  <p>Country: <b>{u.location.country}</b></p>*/}
          {/*  <p>City: <b>{u.location.city}</b></p>*/}
          {/*</div>*/}
        </div>
      </div>;
    }
  );
  
  return (
    <div>
      <h3>Users</h3>
      <div className="users-wrapper">
        {users}
      </div>
    </div>
  );
};

export default Users;

