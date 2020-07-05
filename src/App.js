import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
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
		return (
			<div className="App">
				<header>
					<NavBar format={myFormat} oState={oState} />
				</header>
				<main>
					<Home format={myFormat} />
					<div className="transit"></div>
					<Portfolio format={myFormat} />
				</main>
			</div>
		);
	}
}

export default observer(App);
