import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import { Grid, Row } from 'react-flexbox-grid';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

import Input from '../partials/Input';

class KnowledgeRepresentation extends Component {
	getUserText() {
		let text = '';
		if (Meteor.user().profile == null) {
			Meteor.users.update(Meteor.userId(), {
				$set: {
					profile: {
						text: ''
					}
				}
			});
		}
		else {
			text = this.props.section_text;
		}

		return text;
	}
	render() {
		return (
			<div>
				<Row>
					<h1>Knowledge Representation</h1>
				</Row>
				<Row>
					<Card className="full-width">
						<CardHeader
							title="Problem Statement"
							actAsExpander={true}
							showExpandableButton={true}
							/>
						<CardText expandable={true}>
							<Grid fluid={true}>
								<Card>
									<CardHeader
									title="Who are your users?"
									actAsExpander={true}
									showExpandableButton={true}
									/>
									<CardText>
										<Input text={this.getUserText()} />
										{this.getUserText()}
									</CardText>
								</Card>
							</Grid>
						</CardText>
					</Card>
				</Row>
			</div>
		);
	}
}

const composer = (props, onData) => {
  const user = Meteor.user();
  onData(null, {
    section_text: (user.profile !== undefined) ? user.profile.text : ''
  });
};

export default composeWithTracker(composer)(KnowledgeRepresentation);