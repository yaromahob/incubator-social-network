export type TUserData = {
	user: string
	directory: string
}

export type TUserPost = {
	id: number
	message: string
	likesCount: number
}

export type TUserMessages = {
	id: number
	message: string
}

export const state = {
	userData: [
		{
			user: 'Dimych',
			directory: '/dimych'
		},
		{
			user: 'Andrey',
			directory: '/andrey'
		},
		{
			user: 'Sveta',
			directory: '/sveta'
		},
		{
			user: 'Sasha',
			directory: '/sasha'
		},
		{
			user: 'Viktor',
			directory: '/viktor'
		},
		{
			user: 'Valera',
			directory: '/valera'
		},
	],
	userPosts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 10},
		{id: 2, message: 'It is my first post', likesCount: 12},
		{id: 3, message: 'ALLO', likesCount: 15},
		{id: 4, message: 'DAROVA BRAT', likesCount: 99},
	],
	userMessages: [
		{id: 1, message: 'Hi'},
		{id: 1, message: 'I am fine and you?'},
		{id: 1, message: 'I am fine too. What you do?'},
		{id: 1, message: 'Nothing and you?'},
		{id: 1, message: 'I am going home. '},
	]
}
