import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row } from 'react-flexbox-grid';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'

import AccountsUIWrapper from '../partials/AccountsUIWrapper'

import { Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stepIndex: 0
		}
		this._handleNext = this._handleNext.bind(this);
		this._handlePrev = this._handlePrev.bind(this);
		this.renderStepActions = this.renderStepActions.bind(this);
	}
	_handleNext() {
		const {stepIndex} = this.state;
		if (stepIndex < 4) {
			this.setState({stepIndex: stepIndex + 1});
		} else {
			this.setState({stepIndex: 0});
		}
	};

	_handlePrev() {
		const {stepIndex} = this.state;
		if (stepIndex > 0) {
			this.setState({stepIndex: stepIndex - 1});
		} else {
			this.setState({stepIndex: 4});
		}
	};

	renderStepActions(step) {
		return (
			<div style={{margin: '12px 0'}}>
			<RaisedButton
				label="Next"
				disableTouchRipple={true}
				disableFocusRipple={true}
				primary={true}
				onTouchTap={this._handleNext}
				style={{marginRight: 12}}
			/>
			<FlatButton
				label="Back"
				disableTouchRipple={true}
				disableFocusRipple={true}
				onTouchTap={this._handlePrev}
			/>

			</div>
			);
	}

	render() {
		const stepIndex = this.state.stepIndex;
		return (
			<Row>
			<AccountsUIWrapper />
			<h1>HomePage</h1>
			<Link to="/knowledge-representation">Knowledge Representation</Link>
			<Link to="/set-goal">Set Goal</Link>	
				<Stepper
					activeStep={stepIndex}
					linear={false}
					orientation="vertical"
				>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
							Set Goal
						</StepButton>
						<StepContent>
							<p>
								For each ad campaign that you create, you can control how much
								you're willing to spend on clicks and conversions, which networks
								and geographical locations you want your ads to show on, and more.
							</p>
							{this.renderStepActions(0)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
							Learn
						</StepButton>
						<StepContent>
							<p>
								An ad group contains one or more ads which target a shared set of keywords
							</p>
							{this.renderStepActions(1)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
							Plan
						</StepButton>
						<StepContent>
							<p>
								Try out different ad text to see what brings in the most customers,
								and learn how to enhance your ads using features like ad extensions.
								If you run into any problems with your ads, find out how to tell if
								they're running and how to resolve approval issues.
							</p>
							{this.renderStepActions(2)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 3})}>
							Make Progress
						</StepButton>
						<StepContent>
							<p>
								Try out different ad text to see what brings in the most customers,
								and learn how to enhance your ads using features like ad extensions.
								If you run into any problems with your ads, find out how to tell if
								they're running and how to resolve approval issues.
							</p>
							{this.renderStepActions(2)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onTouchTap={() => this.setState({stepIndex: 4})}>
							Reflect
						</StepButton>
						<StepContent>
							<p>
								Try out different ad text to see what brings in the most customers,
								and learn how to enhance your ads using features like ad extensions.
								If you run into any problems with your ads, find out how to tell if
								they're running and how to resolve approval issues.
							</p>
							{this.renderStepActions(2)}
						</StepContent>
					</Step>
				</Stepper>
			</Row>
			);
	}
}

export default Index;