import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Grid, Row } from 'react-flexbox-grid';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

class KnowledgeRepresentation extends Component {
	render() {
		return (
			<div>
				<Row>
					<h1>Knowledge Representation</h1>
				</Row>
				<Row>
					<Card>
						<CardHeader
							title="Problem Statement"
							actAsExpander={true}
							showExpandableButton={true}
							/>
						<CardText expandable={true}>
							<Grid fluid={true}>
								<Card>
									<CardText>
										HIII
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

export default KnowledgeRepresentation;