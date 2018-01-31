import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SurveyNew from './surveys/SurveyNew';







class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>	
				<div className="container">
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route path="/survey/new" component={SurveyNew} />
				</div>
			</BrowserRouter>
		);
  	}
}

export default connect(null, actions)(App);


// BrowserRouter takes in at most 1 child 