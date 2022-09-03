import React from 'react';
import logo from './assets/logo192.png'
import './App.css';

function App() {
	return (
		<div>
			<header className='header-wrapper'>
				<img src={logo} alt="logo"/>
				<h1>New Social Network</h1>
			</header>
			<main>
				<nav>
					<ul>
						<li><a href="/profile">Profile</a></li>
						<li><a href="/messages">Messages</a></li>
						<li><a href="/news">News</a></li>
						<li><a href="/music">Music</a></li>
					</ul>
				</nav>
				<div className="content-body">
					<h2>C O N T E N T</h2>
				</div>
			</main>
			<footer>footer yaromahob</footer>
		</div>
	);
}

export default App;
