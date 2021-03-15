import * as React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './scss/app';

import Chirps from './components/Chirps';
import Add from './components/AddChirp';
import Admin from './components/Admin';

const App = (props: IAppProps) => {
		
	return (
		<main className="container">
			<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Chirps}></Route>
				<Route exact path="/add" component={Add}></Route>
				<Route exact path="/:id/admin" component={Admin}></Route>
			</Switch>
			</BrowserRouter>
		</main>
	);
};

interface IAppProps {}

export default App;




