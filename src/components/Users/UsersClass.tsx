import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import './users.css';
import {v1} from "uuid";
import axios from "axios";
import {UsersType} from "./Users";

class UsersClass extends React.Component<any, any> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
      this.props.setUsersCallback(responce.data.items);
    });
  }
  
  
  followHandler = (id: number) => {
    this.props.followFriendCallback(id);
  };
  unFollowHandler = (id: number) => {
    this.props.unFollowFriendCallback(id);
  };
  
  
  render() {
    return <div>
      <h3>Users</h3>
      <div className="users-wrapper">
        {this.props.items.map((u: UserType) => {
            return <div className="user" key={u.id}>
              <div className="userName">
                <img src={u.photos.small === null
                  ? 'https://www.svgrepo.com/show/57853/avatar.svg'
                  : u.photos.small}
                     alt="AVATAR"/>
                <h3>{u.name}</h3>
                {u.followed
                  ? <button className="unfollow" onClick={() => this.unFollowHandler(u.id)}>Unfollow</button>
                  : <button className="follow" onClick={() => this.followHandler(u.id)}>Follow</button>}
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
        )}
      </div>
    </div>;
    
  }
}

export default UsersClass;

