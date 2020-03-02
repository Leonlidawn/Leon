import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
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
					</Switch>
				</Route>
			</main>
		</div>
	);
}

export default App;
