// Include React 
import React from "react";

// This is the saved component. It will be used to show a log of saved articles.
export  class Saved extends React.Component{

	constructor(props) {
		   super(props);
		this.state ={savedArticles: []}
		}

	clickToDelete(result){
		this.props.deleteArticle(result);

	}

	componentWillReceiveProps(nextProps){
		let that = this;
		console.log(nextProps);
		let myResults = nextProps.savedArticles.map(function(search, i){
			let boundClick = that.clickToDelete.bind(that, search);
			return <div className="list-group-item" key={i}><h4><a href={search.url} target="_blank">{search.title}</a></h4><br />{search.date}<br /><button type="button" className="btn btn-danger" style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Delete</button></div>
		});

		this.setState({savedArticles: myResults});
	}

	// Here we render the function
	render(){

		return(

			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
				</div>
				<div className="panel-body">

					{/* Here we use a map function to loop through an array in JSX*/}
					{this.state.savedArticles}
				</div>
			</div>

		)
	}
}