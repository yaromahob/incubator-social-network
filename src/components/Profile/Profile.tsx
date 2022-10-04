import React, {ChangeEvent} from 'react';
import './Profile.css'
import Post from "../Post/Post";
import {TUserPost} from "../../redux/state";

// type TPostType = {
// 	userPosts: TUserPost[]
// }
type TStatePostType = {
	postUser: TUserPost[]
	newPostCallback: (post: string) => void
	addLikeCallback: (id: string) => void
}

const Profile: React.FC<TStatePostType> = (props) => {
	const [newPost, setNewPost] = React.useState<string>('')
	const postHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost(e.target.value)
	}

	const addPostHandler = () => {
		props.newPostCallback(newPost)
		setNewPost('')
	}

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
					<input type="text" value={newPost} onChange={postHandler}/>
					<button onClick={addPostHandler}>Send</button>
				</div>
				<div>Posts:</div>
				<div className='posts-container'>
					{props.postUser.map(p => <Post
						key={p.id}
						id={p.id}
						message={p.message}
						likesCount={p.likesCount} addLikeCallback={props.addLikeCallback}/>)}
				</div>
			</div>
		</div>
	);
}

export default Profile;
