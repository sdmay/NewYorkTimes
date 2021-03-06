import React from "react";

// Component creation
export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: "",
			startYear: "",
			endYear: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	// This function will respond to the user input 
	handleChange(event) {

		// Here we create syntax to capture any change in text to the query terms (pre-search).
		let newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);

	}

	// When a user submits... 
	handleClick() {

		// Set the parent to have the search term
		this.props.setTerm(this.state.topic, this.state.startYear, this.state.endYear);


	}

	// Here we render the function
	render() {

		return (

			<div className="panel panel-info">
				<div className="panel-heading">
					<h2 className="panel-title text-center"><strong>Search</strong></h2>
				</div>
				<div className="panel-body text-center">

					<form>
						<div className="form-group">
							<h4 className="">Topic</h4>
							<input type="text" className="form-control text-center" id="topic" onChange={this.handleChange} required />
							<br />

							<h4 className="">Start Year</h4>
							<input type="text" className="form-control text-center" id="startYear" onChange={this.handleChange} required />
							<br />

							<h4 className="">End Year</h4>
							<input type="text" className="form-control text-center" id="endYear" onChange={this.handleChange} required />
							<br />

							<button type="button" className="btn btn-primary btn-lg" onClick={this.handleClick} bsSize="large" block>Search</button>
						</div>

					</form>
				</div>
			</div>
		)
	}
}