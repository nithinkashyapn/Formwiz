import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div>
				<Link to="/form/basic" className="next">
					Basic
				</Link>
				You're home!
			</div>
		);
	}
}
export default Home;
