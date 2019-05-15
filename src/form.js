import React, { Component } from "react";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";
import { Formik, Form } from "formik";
import BasicPage from "./form/basic";
import LocationPage from "./form/location";
import SubmitPage from "./form/submit";
import { DisplayFormikState } from "./helper";

class WizardForm extends Component {
	state = {
		submitted: false
	};
	handleSubmit = data => {
		console.log(data);
		this.setState(
			{
				submitted: true
			},
			() => this.props.history.push("/")
		);
	};
	render() {
		return (
			<div>
				<Prompt
					when={!this.state.submitted}
					message={({ pathname }) => {
						return matchPath(pathname, { path: "/form" })
							? true
							: "Are you sure you want to navigate away?";
					}}
				/>
				<Formik
					initialValues={{
						email: "",
						firstName: "",
						lastName: "",
						address: "",
						city: "",
						state: "",
						zipCode: "",
						tos: false
					}}
					onSubmit={this.handleSubmit}>
					{props => {
						return (
							<div>
								<Form props={props}>
									<Switch>
										<Redirect
											from="/form"
											exact
											to="/form/basic"
										/>
										<Route
											path="/form/basic"
											render={routeProps => (
												<BasicPage
													{...routeProps}
													{...props}
												/>
											)}
										/>
										<Route
											path="/form/location"
											render={routeProps => (
												<LocationPage
													{...routeProps}
													{...props}
												/>
											)}
										/>
										<Route
											path="/form/submit"
											render={routeProps => (
												<SubmitPage
													{...routeProps}
													{...props}
												/>
											)}
										/>
									</Switch>
								</Form>
								<DisplayFormikState {...props} />
							</div>
						);
					}}
				</Formik>
			</div>
		);
	}
}

export default WizardForm;
