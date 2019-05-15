import React from "react";
import Home from "./home";
import Form from "./form";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/form" component={Form} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
