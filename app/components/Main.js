import axios from "axios";

// Include React 
import React from 'react';

// Here we include all of the sub-components
import Form from "./children/Form";
// let Form = require('');

import Results from "./children/Results";
import Saved from "./children/Saved";


// Helper Function
// let helpers = require('./utils/helpers.js');
import helpers from "./utils/helpers.js";

// This is the main component. 
// let Main = React.createClass({
export default class Main extends React.Component{

constructor(props) {
    super(props);
    this.state = {
			topic: "",
			startYear: "",
			endYear: "",
			results: [],
			savedArticles: []
		};
    this.setTerm = this.setTerm.bind(this)
  }
		setTerm(tpc, stYr, endYr){
		this.setState({
			topic: tpc,
			startYear: stYr,
			endYear: endYr
		})
	}

	saveArticle(title, date, url){
		helpers.postArticle(title, date, url);
		this.getArticle();
	}

	deleteArticle(article){
		console.log(article);
		axios.delete('/api/saved/' + article._id)
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
				return response;
			}.bind(this));

		this.getArticle();
	}

	getArticle(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
			}.bind(this));
	}

	componentDidUpdate(prevProps, prevState){

		if(prevState.topic != this.state.topic){
			console.log("UPDATED");

			helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
				.then(function(data){
					console.log(data);
					if (data != this.state.results)
					{
						this.setState({
							results: data
						})
					}
				}.bind(this))
		}
	}

	componentDidMount(){
		axios.get('/api/saved')
			.then(function(response){
				this.setState({
					savedArticles: response.data
				});
			}.bind(this));
	}

	render(){
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron" >
                    <h1 className="panel-title text-center">Search The New York Times</h1>
                    <h3>Find articles during a specified time frame</h3>
							</div>
				</div>
				<div className="row">

					<Form setTerm={this.setTerm}/>

				</div>

				<div className="row">
			
					<Results results={this.state.results} saveArticle={this.saveArticle}/>

				</div>

				<div className="row">
				
					<Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle} />

				</div>
			</div>
		)
	}
}