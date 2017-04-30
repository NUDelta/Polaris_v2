import { Mongo } from 'meteor/mongo';
import {Section} from '../section/section.js';

class KnowledgeRepresentationCollection extends Mongo.Collection {
	insert(kr, callback) {
		console.log(kr);

		kr.sections = [];

		switch (kr.level) {
			case 1:
				const section1 = Section.insert({
					name: "Problem Statement",
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

				const section2 = Section.insert({
					name: "Technical Arguments",
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