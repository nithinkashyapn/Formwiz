import FormikWizard, { useFormikWizard } from "formik-wizard";
import React from "react";

import steps from "./steps";

const FormWrapper = ({
	children,
	isLastStep,
	status,
	goToPreviousStep,
	canGoBack,
	actionLabel
}) => {
	return (
		<div>
			{status && (
				<div>
					{status.message}
					<hr />
				</div>
			)}
			<div>
				<button
					type="button"
					onClick={goToPreviousStep}
					disabled={!canGoBack}>
					Previous
				</button>
				<button type="submit">
					{actionLabel || (isLastStep ? "Submit" : "Next step")}
				</button>
			</div>
			<hr />
			{"useFormikWizard"}
			{children}
		</div>
	);
};

function App() {
	const handleSubmit = React.useCallback(values => {
		console.log("full values:", values);

		return {
			message: "Thanks for submitting!"
		};
	}, []);

	return (
		<FormikWizard
			steps={steps}
			onSubmit={handleSubmit}
			render={FormWrapper}
		/>
	);
}

export default App;
