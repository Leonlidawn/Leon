import { Delete } from 'react-typeme';
import React from 'react';

export default {
	'name.first': 'leon',
	'name.second': 'li',
	'menu.home': 'home',
	'menu.resume': 'resume',
	'menu.works': 'works',
	'menu.language': '英文',
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
		`Hi, I am Leon. A passionate full-stack web developer who loves delivering solutions with code. 

I enjoy the excitement of learning new things and always like to share knowledge with others.

I am an excellent team player in Agile/Scrum teams. I believe efficient and responsible communications are the fundamentals of good collaboration.`,
	'skills.array':
		[
			'Front-end: HTML5, CSS3, Sass, Less, JavaScript (ES6+), React, Redux, Redux-saga, Redux-thunk, Pug',
			'Back-end: Node.js, Express.js, KeystoneJS',
			'Testing: Jest',
			'Databases: MongoDB, MySQL',
			'DevOps: Docker',
			'Tooling: Git, GitHub, NPM, BitBucket, JIRA',
			'Methodologies: Agile / Scrum / Kanban',
		],
	'contact.email': 'email',
	'contact.mobile': 'mobile'
};
