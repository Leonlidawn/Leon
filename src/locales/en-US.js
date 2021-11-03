import { Delete } from 'react-typeme';
import React from 'react';

export default {
	'name.first': 'Leon',
	'name.second': 'Li',
	'menu.home': 'Home',
	'menu.resume': 'Resume',
	'menu.portfolio': 'Portfolio',
	'menu.language': 'English',
	'home.banner.array':
		[
			'I code cool websites',
			<Delete characters={18} />,
			'love MERN stack',
			<Delete characters={15} />,
			'spot problems',
			<Delete characters={12} />,
			'olve problems',
			< Delete characters={13} />
		]
	,
	'introduction':
		`Hi, I am Leon. A passionate full-stack web developer based in sydney, Australia.

I enjoy the excitement of learning new things and always like to share knowledge with others.

I am an excellent team player in Agile/Scrum teams. I believe efficient and responsible communications are the fundamentals of good collaboration.`,
	'skills.array':
		[
			'Front-end: HTML5, CSS3, scss, Less, JavaScript (ES6+), Angular, React, Redux, Redux-saga, Redux-thunk, Pug',
			'Back-end: Node.js, Express.js, KeystoneJS',
			'Testing: Jest',
			'Databases: MongoDB, MySQL',
			'DevOps: Docker',
			'Tooling: Git, GitHub, NPM, BitBucket, JIRA',
			'Methodologies: Agile / Scrum / Kanban',
		],
	'contact.email': 'Email',
	'contact.mobile': 'Mobile',
	'follow-me': 'Follow Me',

	'playground.title': 'Play ground',
	'playground.description': 'Here is the place where I put my random pieces of code snipshots. I believe this sparkcles one day will turn into sky reaching flames',
	'playground.found': 'Oh! Looks like you\'ve found Leon\'s secrete playground!'
};
