import React from 'react';
import helpers from "../utils/helpers.js";
// let helpers = require('../utils/helpers.js');
// Component creation
export  class Results extends React.Component{

constructor(props) {
	   super(props);
		this.state ={
			title: "",
			date: "",
			url: "",
			results: []
		}
				this.clickToSave = this.clickToSave.bind(this);
		}
	// When a user clicks save article
	clickToSave(result){

		this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);

	}

	componentWillReceiveProps(nextProps){
		let that = this;
		let myResults = nextProps.results.map(function(search, i){
			let boundClick = that.clickToSave.bind(that, search);
			return <div className="list-group-item" key={i}><h4><a href={search.web_url} target="_blank">{search.headline.main}</a></h4><br />{search.pub_date}<br /><button type="button" className="btn btn-success" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button></div>
		});

		this.setState({results: myResults});
	}
	
	// Here we render the function
	render(){
		return(

			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Results</strong></h3>
				</div>
				<div className="panel-body">
						{this.state.results}
				</div>
			</div>

		)
	}
}