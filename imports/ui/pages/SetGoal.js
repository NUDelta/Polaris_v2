import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';

import {KnowledgeRepresentations} from '../../api/knowledge-representation/knowledge-representation.js';
import {Sections} from '../../api/section/section.js';

import { Row, Col } from 'react-flexbox-grid';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


class SetGoal extends Component {
	constructor(props) {
		super(props);
		this._handleCheck = this._handleCheck.bind(this);
	}

	//This is bound using es5 not sure how to do it with es6
	_handleCheck(sectionID, event, checked){
			let profile = this.props.user.profile;
			if(checked){
				profile.current_sections.push(sectionID);
			} else {
				const index = profile.current_sections.indexOf(sectionID);
				profile.current_sections.splice(index, 1);
			}
			
			Meteor.users.update({_id:this.props.user._id}, { 
				$set: {
					profile: profile
				} 
			});
	};

	render() {
		let sectionComponents = [];
		this.props.sections.forEach(sectionObject => {
			sectionComponents.push(
				<ListItem
					key={sectionObject._id} 
					primaryText={sectionObject.name}
					leftCheckbox={<Checkbox key={sectionObject._id} onCheck={this._handleCheck.bind(this, sectionObject._id)}/>} 
				/>
			);
		});

		
		return (
			<Row>
				<Col xs={12} mdOffset={1} md={10}>
					<h1>Set Goal</h1>
					<p>
						Set your goals by choosing which sections of the knowledge representation 
						you would like to tackle.
					</p>
					<List>
						{sectionComponents}
					</List>
				</Col>
			</Row>
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
			sections: sectionArray,
			user: user
		});
	}
};

export default composeWithTracker(composer)(SetGoal);