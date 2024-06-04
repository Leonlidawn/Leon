import { Delete } from 'react-typeme';
import React from 'react';
export default {
	'name.first': 'Leon',
	'name.second': 'Li',
	'menu.home': '首页',
	'menu.resume': '简历',
	'menu.portfolio': '作品',
	'menu.language': '中文',
	'home.banner.array':
		[
			'我写优质的网站',
			<Delete characters={6} />,
			'擅长MERN技术栈',
			<Delete characters={9} />,
			'发现问题，也解决问题',
			< Delete characters={10} />
		]
	,
	'introduction':
		`你好，我是Leon，坐标悉尼，一个充满热诚的网页开发者。 我善用代码解决问题. 对于知识的态度是乐于探究更乐于分享。可以单干，也喜欢团队，熟悉敏捷开发. 深知有效负责的沟通是良好协作的第一基石。`,
	'skills.array':
		[
			'前端: HTML5, CSS3, SCSS, Tailwind, JavaScript(ES6 +), Typescript, Angular, React, Ant Design, Bootstrap, Styled-component',
			'后端:  Node.js, Express, NextJS, NestJS, KeystoneJS, GraphQl, RESTful API, Swagger, JWT, Java, Python',
			'测试: Jest, Cypress, K6',
			'数据库: MongoDB, MySQL',
			'运维: AWS(EC2, S3, CodePipeline, CodeBuild, Route 53), Docker, PM2, Digital Ocean',
			'工具: Git, GitHub, NPM, BitBucket, JIRA',
			'协作模式: Agile / Scrum / Kanban',
			'Web 3: Web3: Solidity, Hardhat, Ether.js',
		],
	'contact.email': '邮箱',
	'contact.mobile': '手机',
	'follow-me': '关注我',

	'playground.title': '藏宝之地',
	'playground.description': '收集知识的打火石，点点星火 日夜积累 也可燎原。',
	'playground.found': '哎呀！你在旅途上遇到了了时空裂缝，误入了Leon的藏宝之地！'

};