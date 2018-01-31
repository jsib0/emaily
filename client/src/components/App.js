import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';




const SurveyView = () => <h2>SurveyNew</h2>


class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>	
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyView} />
					</div>
				</BrowserRouter>
			</div>
		);
  	}
}

export default connect(null, actions)(App);


// BrowserRouter takes in at most 1 child 