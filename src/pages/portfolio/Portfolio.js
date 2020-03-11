import './portfolio.scss';
import React from 'react';
import { observer } from 'mobx-react';
import { PROJECT_TYPE } from 'src/constants/portfolio';
import imageHandy from 'src/images/portfolios/screenshot-handy-hero.png';
import imageDashboard from 'src/images/portfolios/screenshot-JR-Dashedboard.png';
import imageOfficial from 'src/images/portfolios/screenshot-JR-official-site.png';
import imageLeon from 'src/images/portfolios/screenshot-Leon-blog.png';
import imageMath from 'src/images/portfolios/screenshot-math.png';
import imageWeather from 'src/images/portfolios/screenshot-weather.png';

function Portfolio() {

	const works = {

		"JR Official Website":
		{
			image: imageOfficial,
			link: 'https://jiangren.com.au/',
			description: 'An offcial website for JR Academy.',
			type: 'Work',
			type: PROJECT_TYPE.COMMERCIAL,
			role: 'Full stack developer',
			year: 2019,
			stack: {//stacks involved 
				'Front-end':
					'HTML5, CSS3, Sass, JavaScript(ES6 +), React, Redux, Redux-saga, RESTful API, Swagger, Pug, Bootstrap',
				'Back-end':
					'Node.js, KeystoneJS',
				'Database':
					'MongoDB',
				'Tooling':
					'Git, NPM, BitBucket, JIRA, Postman, Zeplin',
				'Methodologies':
					'Agile/Scrum/Kanban, CI/CD'
			}
		},
		"JR Dashboard":
		{
			image: imageDashboard,
			description: `An online application of JR Academy which provides learning management to its students, teacher and tutors.`,
			type: 'Work',
			type: PROJECT_TYPE.COMMERCIAL,
			role: 'Full stack developer.',
			link: 'http://uat-learn.jiangren.com.au.s3-website-ap-southeast-2.amazonaws.com/home',
			year: 2019,
			stack: {
				'Front-end':
					'HTML5, CSS3, Less, JavaScript(ES6 +), React, Redux, Redux-saga, UmiJs, DvaJs, RESTful API, Swagger, Ant Design, Zeplin',
				'Back-end':
					'Node.js, KeystoneJS',
				'Database':
					'MongoDB',
				'Tooling':
					'Git, NPM, BitBucket, JIRA, Postman',
				'Methodologies':
					'Agile/Scrum/Kanban, CI/CD'
			}
		},
		"Leon's blog ":
		{
			image: imageLeon,
			link: 'www.leonlidawn.com',
			description: `It is this website we are looking at right now. 
			Here is a place where I will share my portfolios and resume.
			At the time of writing this I have just implemented some every simple layouts, but I
			will keep updating this website! - Mar 9, 2020
			`,
			type: PROJECT_TYPE.PERSONAL,
			year: 2020,
			stack: {
				'Front-end':
					'HTML5, CSS3, Sass, JavaScript(ES6 +), React, MobX',
				'Back-end':
					'Node.js',
				'DevOps':
					'AWS(EC2, CodePipeline, CodeBuild, Elastic Beanstalk, Route 53)',
				'Tooling':
					'Git, NPM, GitHub, Lucidchart',
				'Methodologies':
					'CI/CD'
			}
		},
		"Weather Forecast":
		{
			image: imageWeather,
			link: 'http://167.71.210.90/',
			description: 'A responsive weather forecast app, based on a free forecast data api provided by openweathermap. Weather Data is cached for at most 1 hour on the server.',
			repository: 'https://github.com/Leonlidawn/weather-app',
			type: PROJECT_TYPE.PERSONAL,
			year: 2019,
			stack: {
				'Front-end':
					'HTML5, CSS3, Sass, JavaScript(ES6 +), React, Redux, Redux-thunk, RESTful API',
				'Back-end':
					'Node.js, Express.js',
				'DevOps':
					'PM2, Digital Ocean',
				'Tooling':
					'Git, NPM, GitHub, JIRA, Postman, Lucidchart'
			}
		},
		"Handy Hero":
		{
			image: imageHandy,
			link: 'http://206.189.86.20/',
			description: 'A website built by a team of 3 for fun and practice purposes, inspired by Airtasker. Being the leader of this team I have designed and implemented the overall structure of this website. It is still under development and will be updated from time to time.',
			year: 2019,
			type: PROJECT_TYPE.PERSONAL,
			stack: {
				'Front-end':
					'HTML5, CSS3, Sass, JavaScript(ES6 +), React, Redux, Redux-thunk, RESTful API, JWT',
				'Back-end':
					'Node.js, Express.js',
				'Testing':
					'Jest',
				'Database':
					'MongoDB Atlas',
				'DevOps':
					'AWS(EC2, S3), PM2, Digital Ocean, Heroku',
				'Tooling':
					'Git, NPM, BitBucket, JIRA, Postman, Lucidchart',
				'Methodologies':
					'Agile/Scrum/Kanban'
			}
		},
		"The Mathematics Institution":
		{
			image: imageMath,
			description: 'A responsive website for Longhurst Mathematics Coaching College. This website was built in 2018 and was then taken down in 2019 due to switching to another host service provider. This website provides both content management and display.',
			role: 'Full-stack developer',
			type: PROJECT_TYPE.COMMERCIAL,
			year: 2018,
			stack: {
				'Front-end':
					'HTML5, CSS3, Sass, JavaScript(ES6 +), RESTful API, Bootstrap, Vue.js',
				'Back-end':
					'Node.js, Express.js, Okta',
				'Database':
					'SQLite',
				'DevOps':
					'Docker, PM2, Digital Ocean',
				'Tooling':
					'Git, NPM, BitBucket, JIRA, Postman, Lucidchart',
				'Methodologies':
					'Agile/Scrum/Kanban'
			}
		},
	};

	return (
		<div className="portfolio">
			{

				Object.entries(works).map(
					(entry) => {
						const name = entry[0];
						const details = entry[1];
						return (
							<div className={details.type === PROJECT_TYPE.COMMERCIAL ? "project project--commercial" : "project project--personal"}>
								<div className="project__header">
									<div className="project__header__left">
										<span className="project__name">
											{name}
											{details.link &&
												<a className="project__link" href={details.link} target='_blank'>
													<i class="fas fa-external-link-alt"></i>
												</a>}
										</span>
									</div>
									<div className="project__type">{details.type}</div>
									<div className="project__year">year:{details.year}</div>

								</div>
								<div className="project__content">
									<div className="project__image">
										<img src={details.image} />
									</div>
									<div className="project__content__left">
										<div className="project__description">
											<div className="project__description__title">
												Description
												</div>
											<p>{details.description}</p></div>
										{details.type === PROJECT_TYPE.COMMERCIAL && (<div className="project__role">
											<div className="project__role__title">
												My role
											</div>
											{details.role}
										</div>)}
										<div className="project__stack">
											<div className="project__stack__title">
												Tech-stack I have used
											</div>
											{
												Object.entries(details.stack).map(
													(entry) => {
														const name = entry[0];
														const skills = entry[1];
														return (
															<div className="skill-set">
																<div className="skill-set__name">
																	{name}
																</div>
																<span className="skill-set__detail">{skills}</span>
															</div>
														)
													}
												)
											}</div>
									</div>
								</div>


							</div>
						)
					}
				)
			}

		</div >
	)
}
export default observer(Portfolio);
