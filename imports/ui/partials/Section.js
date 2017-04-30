import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Grid, Row } from 'react-flexbox-grid';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

import Input from '../partials/Input';

class Section extends Component {
	render() {
		let questions = [];
		this.props.section.questions.forEach(sectionQuestion => {
			questions.push(
				<Card key={sectionQuestion.title}>
					<CardHeader title= {sectionQuestion.title} />
					<CardText>
						<Input text={sectionQuestion.text} />
					</CardText>
				</Card>
			);
		});

		return (
			<Card className="full-width">
				<CardHeader
					title= {this.props.section.name}
					actAsExpander={true}
					showExpandableButton={true}
					/>
				<CardText expandable={true}>
					<Grid fluid={true}>
						{questions}
					</Grid>
				</CardText>
			</Card>
		);
	}
}


export default Section;