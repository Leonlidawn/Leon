import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
import Works from './pages/works/Works';
import Resume from './pages/resume/Resume';
import Contacts from './pages/contacts/Contacts';

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
								<HomePage
								/>}
						/>
						<Route path='/resume'
							component={() =>
								<HomePage
								/>}
						/>
						<Route path='/contacts'
							component={() =>
								<HomePage
								/>}
						/>
					</Switch>
				</Route>
			</main>
		</div>
	);
}

export default App;
