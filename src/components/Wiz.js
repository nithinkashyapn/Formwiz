import React, { Component } from "react";

class Wiz extends Component {
	state = {
		pageIndex: 0
	};

	render() {
		const renderProps = {
			navigateBack: this._navigateBack,
			navigateNext: this._navigateNext,
			pageIndex: this.state.pageIndex,
			renderPage: this._renderPage
		};
		return this.props.children(renderProps);
	}

	_navigateBack = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex - 1 < 0 ? 0 : prevState.pageIndex - 1
		}));
	};

	_navigateNext = () => {
		this.setState(prevState => ({
			pageIndex: prevState.pageIndex + 1
		}));
	};

	_renderThisPage = pageId => {
		this.setState({
			pageIndex: pageId
		});
	};

	_renderPage = formProps => {
		const { pageIndex } = this.state;

		const Page = this.props.pages[pageIndex];

		return (
			<Page
				{...formProps}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				renderThisPage={this._renderThisPage}
				pageIndex={pageIndex}
			/>
		);
	};
}

export default Wiz;
