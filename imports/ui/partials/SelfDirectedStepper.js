import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'

import { Step, Stepper, StepButton, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class SelfDirectedStepper extends Component {
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
						<h5><Link to="/set-goal">Set Goal</Link></h5>
						<p>
							Decide what your next steps for your research project are. 
							Specifically, you will decide which holes to fill in your knowledge 
							representation.
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
							Learn the skills and/or models to help you achieve the goals you set. 
							This could range from learning how to push iOS notifications to 
							understanding previous literature in your research domain.
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
							Plan out the work you want to do to fill the holes in your knowledge 
							representation. You will using the sprint planning spreadsheets for 
							this step.
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
							Execute your plan. Try your best to do what is of most value to your 
							project first. If you get stuck for longer than 30 minutes on 
							something please ask for help.
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
		);
	}
}


export default SelfDirectedStepper;