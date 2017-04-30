import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import {KnowledgeRepresentations} from '../../api/knowledge-representation/knowledge-representation.js';
import {Sections} from '../../api/section/section.js';

import { Grid, Row } from 'react-flexbox-grid';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';


import Input from '../partials/Input';
import Section from  '../partials/Section';

class KnowledgeRepresentation extends Component {
	render() {
		let sectionComponents = [];
		this.props.sections.forEach(sectionObject => {
			sectionComponents.push(
				<Section key={sectionObject.section_number} section={sectionObject} />
			);
		});
		return (
			<div>
				<Row>
					<h1>Knowledge Representation</h1>
				</Row>
				<Row>
					{sectionComponents}
				</Row>
			</div>
		);
	}
}

const composer = (props, onData) => {
	const subscription = Meteor.subscribe('krs');
	const user = Meteor.user();

	if ( subscription.ready() ) {
		const sectionIds = KnowledgeRepresentations.find({_id: user.profile.knowledge_representation_id}).fetch().map(kr => kr.sections)[0];
		
		//Sorted array of section Objects
		const sectionArray = Sections.find({_id: {$in: sectionIds}}, {sort: {section_number: 1}}).fetch();

		onData(null, {
			section_text: (user.profile !== undefined) ? user.profile.text : '',
			sections: sectionArray
		});
	}
};

export default composeWithTracker(composer)(KnowledgeRepresentation);