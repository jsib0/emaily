//SurveyForm shows a form for a user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
	{label: 'Survey Title', name: 'title', novalueError: "Title must not be empty"},
	{label: 'Subject Line', name: 'subject', novalueError: "Subject must not be empty" },
	{label: 'Email Body', name: 'body', novalueError: "Body must not be empty" },
	{label: 'Recipient List', name: 'emails', novalueError: "Email list must not be empty"}
]


class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({label, name}) => {
			return (<Field key={name} component={SurveyField} type="text" label={label} name={name}/>)
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit() )}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn-flat">
						Cancel
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
					Next
					<i className="material-icons right">done</i>
					</button>
					
				</form>
			</div>
		)
	}
}

function validate(values) {
	const errors = {};
	
	errors.emails = validateEmails(values.emails || '');

	_.each(FIELDS, ({name, novalueError}) => {
		if(!values[name]){
			errors[name] = novalueError;
		}
	})

	


	return errors
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);