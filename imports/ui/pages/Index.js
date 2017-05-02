import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-flexbox-grid';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'

import AccountsUIWrapper from '../partials/AccountsUIWrapper'

import SelfDirectedStepper from  '../partials/SelfDirectedStepper';


class Index extends Component {
	render() {
		return (
			<Row>
				<Col xs={12} mdOffset={1} md={10}>
					<Row><AccountsUIWrapper /></Row>
					<Row><h1>HomePage</h1></Row>
					<Row>
						<h5><Link to="/knowledge-representation">Knowledge Representation</Link></h5>
					</Row>
				</Col>
			
			<SelfDirectedStepper />
			</Row>
			);
	}
}

export default Index;