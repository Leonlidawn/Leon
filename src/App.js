import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
import Works from './pages/works/Works';
import Resume from './pages/resume/Resume';
import Contacts from './pages/contacts/Contacts';
import { LANGUAGE } from './constants/language';
import './App.scss';

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<main>
				<Route>
					<Switch>
						<Route path='/'
							component={() =>
								<HomePage
								/>}
						/>
						<Route path='/works'
							component={() =>
								<Works
								/>}
						/>
						<Route path='/resume'
							component={() =>
								<Resume
								/>}
						/>
						<Route path='/contacts'
							component={() =>
								<Contacts
								/>}
						/>
					</Switch>
				</Route>
			</main>
		</div>
	);
}

export default App;
