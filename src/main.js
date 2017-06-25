import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router';
import App from './components/App.js';
import HomePage from './components/HomePage.js';
import CreatePage from './components/CreatePage.js';
import ChallengePage from './components/ChallengePage.js';
import SubmitPage from './components/SubmitPage.js';
render((
	 <Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="create" component={CreatePage} />
			<Route path="challenge" component={ChallengePage} />
			<Route path="submit" component={SubmitPage} />
			<Redirect from="*" to="/" />
		</Route>
	</Router>), document.getElementById('app'));
