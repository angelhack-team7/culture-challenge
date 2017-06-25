import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router';
import App from './components/App.js';
import HomePage from './components/HomePage.js';

render((
	 <Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Redirect from="*" to="/" />
		</Route>
	</Router>), document.getElementById('app'));
