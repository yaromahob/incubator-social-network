import React from 'react';
import './Profile.css'
import Post from "../Post/Post";
import {TUserPost} from "../../redux/state";

type TPostType = {
	userPosts: TUserPost[]
}

const Profile: React.FC<TPostType> = (props) => {

	return (

		<div>
			<div>
				<h3>Profile</h3>
			</div>
			<div className='user-info'>
				<div><img src="https://www.svgrepo.com/show/5125/avatar.svg" alt="avatar svg"/></div>
				<ul>
					<li>Status: I'm working on it</li>
					<li>Soname: Ivanov</li>
					<li>Name: Ivan</li>
					<li>Age: 88</li>
					<li>Sex: Man</li>
				</ul>
			</div>


			<div>
				<div>
					<p>Writing your post</p>
					<input type="text"/>
					<button>Send</button>
				</div>
				<div>Posts:</div>
				<div className='posts-container'>
					{props.userPosts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
				</div>
			</div>
		</div>
	);
}

export default Profile;
