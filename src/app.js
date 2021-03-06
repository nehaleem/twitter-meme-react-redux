import 'materialize-css/bin/materialize.css';

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Menu from './menu/MenuComponent';
import HomePage from './images/HomePageComponent';
import FiltersPage from './filters/FiltersPageComponent';

const App = (props) => (
	<div className="container">
		<div className="row">
			<div className="col s12">
				<h2>Twitter image filter</h2>
			</div>
		</div>
		<div className="row">
			<div className="col s12">
				<Menu />
			</div>
		</div>
		{props.children}
	</div>
);

class AppRouter extends React.Component {
	render () {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<Route path="home" component={HomePage}/>
					<Route path="filters" component={FiltersPage} />
					<Route path="*" component={() => <div>Page not found</div>}/>
				</Route>
			</Router>
		);
	}
}

ReactDOM.render(
	<AppRouter />,
	document.getElementById('#react-app')
);
