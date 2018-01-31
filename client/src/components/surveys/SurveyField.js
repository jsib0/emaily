// SurveyField contains logic to render a single 
// label and text input


import React from 'react';


export default ({input, label, meta: {error, touched}}) => {
	console.log(input)
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: ''}}/>
			<div className="red-text" style={{ height: '18px', position: 'relative', bottom: '18px'}}>
				{touched && error}
			</div>
		</div>
	)
}