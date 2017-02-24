// Include React
var React = require("react");
var Gchild1 = require("../grandchild/gchild1")
var Gchild2 = require("../grandchild/gchild2")

var Gchild3 = require("../grandchild/gchild3")
var Child1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
			
   <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Child1</h3>

              </div>
              <div className="panel-body">
                <div className="grandchild1">
                <p>
		  <a href="#/child1/gchild1"><button className="btn btn-default">gchild1</button></a>
            <a href="#/child1/gchild2"><button className="btn btn-default">gchild2</button></a>
                    <a href="#/child1/gchild3"><button className="btn btn-default">gchild3</button></a>
			</p>
      {this.props.children}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
});
module.exports = Child1;