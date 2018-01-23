import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyView = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
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
	)
}

export default App;


// BrowserRouter takes in at most 1 child 