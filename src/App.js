import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Contacts from './pages/contacts/Contacts';
import { LANGUAGE } from './constants/language';
import './App.scss';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { format } from 'src/util';
const oState = observable({
	language: LANGUAGE.ENGLISH,
})

class App extends React.Component {
	render() {
		const myFormat = (id) => format(oState.language, id);
		console.log(oState.language)
		return (
			<div className="App">
				<header>
					<NavBar format={myFormat} oState={oState} />
				</header>
				<main>
					<Route>
						<Switch>
							<Route exact path='/'
								component={() =>
									<Home
										format={myFormat}
									/>}
							/>
							<Route path='/portfolio'
								component={() =>
									<Portfolio
										format={myFormat}
									/>}
							/>
							<Route path='/resume'
								component={() =>
									<Resume
										format={myFormat}
									/>}
							/>
							<Route path='/contacts'
								component={() =>
									<Contacts
										format={myFormat}
									/>}
							/>
						</Switch>
					</Route>
				</main>
			</div>
		);
	}
}

export default observer(App);
