import { Mongo } from 'meteor/mongo';
import {Sections} from '../section/section.js';

class KnowledgeRepresentationCollection extends Mongo.Collection {
	insert(kr, callback) {

		kr.sections = [];

		switch (kr.level) {
			case 1:
				const section1 = Sections.insert({
					name: "Problem Statement",
					section_number: 1,
					questions: [
						{
							title: "Who are your users?",
							text: ''
						},
						{
							title: "What are your user's needs and goals?",
							text: ''
						}
					]
				});

				const section2 = Sections.insert({
					name: "Technical Arguments",
					section_number: 2,
					questions: [
						{
							title: "What system features enable your affordances to work?",
							text: ''
						}
					]
				});

				kr.sections.push(section1);
				kr.sections.push(section2);

				break;
			default:
				console.log("No match on the level")
		}

	    return super.insert(kr, callback);
	}
}

export const KnowledgeRepresentations = new KnowledgeRepresentationCollection('kr');