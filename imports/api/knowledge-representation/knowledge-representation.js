import { Mongo } from 'meteor/mongo';
import {Sections} from '../section/section.js';

class KnowledgeRepresentationCollection extends Mongo.Collection {
	insert(kr, callback) {

		kr.sections = [];

		switch (kr.level) {
			case 1:
				//Problem Statement - Section 1
				const section1 = Sections.insert({
					name: "Problem Statement",
					section_number: 1,
					questions: [
						{
							title: "What problem(s) are you trying to solve?",
							text: ''
						},
						{
							title: "What is evidence of the problem?",
							text: ''
						},
						{
							title: "Why is this an important problem?",
							text: ''
						}
					]
				});

				//User Needs and Goals - Section 2
				const section2 = Sections.insert({
					name: "User Needs and Goals",
					section_number: 2,
					questions: [
						{
							title: "User 1 – Who is your user?",
							text: ''
						},
						{
							title: "User 1 – What are his/her characteristics? What is important to know about them?",
							text: ''
						},
						{
							title: "User 1 – What are the user's goals?",
							text: ''
						},
						{
							title: "User 1 – What are the obstacles to this goal?",
							text: ''
						},
						{
							title: "User 1 – What is the user's context and how much can it vary?",
							text: ''
						},
						{
							title: "User 2 – Who is your user?",
							text: ''
						},
						{
							title: "User 2 – What are his/her characteristics? What is important to know about them?",
							text: ''
						},
						{
							title: "User 2 – What are the user's goals?",
							text: ''
						},
						{
							title: "User 2 – What are the obstacles to this goal?",
							text: ''
						},
						{
							title: "User 2 – What is the user's context and how much can it vary?",
							text: ''
						},
						{
							title: "User 3 – Who is your user?",
							text: ''
						},
						{
							title: "User 3 – What are his/her characteristics? What is important to know about them?",
							text: ''
						},
						{
							title: "User 3 – What are the user's goals?",
							text: ''
						},
						{
							title: "User 3 – What are the obstacles to this goal?",
							text: ''
						},
						{
							title: "User 3 – What is the user's context and how much can it vary?",
							text: ''
						}
					]
				});

				//Journey Map - Section 3
				const section3 = Sections.insert({
					name: "User Journey Map",
					section_number: 3,
					questions: [
						{
							title: "Link to your Journey Map for your users",
							text: ''
						},
						{
							title: "What are the pain points during your users' journeys?",
							text: ''
						},
						{
							title: "Does your journey map show the complete sequence of events your users experience/do, including major events? Why?",
							text: ''
						},
						{
							title: "What other layers such as emotions, time, quotes, etc. beyond events have you added to your journey map? What do these layers show?",
							text: ''
						}
					]
				});

				//Design Arguments - Section 4
				const section4 = Sections.insert({
					name: "Design Arguments",
					section_number: 4,
					questions: [
						{
							title: "Design Argument 1 – What is the intended outcome of your design? (purpose Y)",
							text: ''
						},
						{
							title: "Design Argument 1 – What is your intervention? (intervention X)",
							text: ''
						},
						{
							title: "Design Argument 1 – What are the characteristics of your intervention? (characteristics A,B,C)",
							text: ''
						},
						{
							title: "Design Argument 1 – What are the affordances that accomplish your intervention?",
							text: ''
						},

						{
							title: "Design Argument 1 – What are the arguments to why your intervention will achieve the your intended outcome? (arguments P,Q,R)",
							text: ''
						},
						{
							title: "Design Argument 2 – What is the intended outcome of your design? (purpose Y)",
							text: ''
						},
						{
							title: "Design Argument 2 – What is your intervention? (intervention X)",
							text: ''
						},
						{
							title: "Design Argument 2 – What are the characteristics of your intervention? (characteristics A,B,C)",
							text: ''
						},
						{
							title: "Design Argument 2 – What are the affordances that accomplish your intervention?",
							text: ''
						},

						{
							title: "Design Argument 2 – What are the arguments to why your intervention will achieve the your intended outcome? (arguments P,Q,R)",
							text: ''
						},
						{
							title: "Design Argument 3 – What is the intended outcome of your design? (purpose Y)",
							text: ''
						},
						{
							title: "Design Argument 3 – What is your intervention? (intervention X)",
							text: ''
						},
						{
							title: "Design Argument 3 – What are the characteristics of your intervention? (characteristics A,B,C)",
							text: ''
						},
						{
							title: "Design Argument 3 – What are the affordances that accomplish your intervention?",
							text: ''
						},

						{
							title: "Design Argument 3 – What are the arguments to why your intervention will achieve the your intended outcome? (arguments P,Q,R)",
							text: ''
						}
					]
				});

				//Technical Argument - Section 5
				const section5 = Sections.insert({
					name: "Technical Argument",
					section_number: 5,
					questions: [
						{
							title: "What technical challenges of making your design arguments work?",
							text: ''
						},
						{
							title: "What are technical solutions to get your design arguments work?",
							text: ''
						},
						{
							title: "Why do these technical solutions work to achieve your design arguments?",
							text: ''
						},
						{
							title: "How do these technical solutions work?",
							text: ''
						}
					]
				});


				kr.sections.push(section1);
				kr.sections.push(section2);
				kr.sections.push(section3);
				kr.sections.push(section4);
				kr.sections.push(section5);

				break;
			default:
				console.log("No match on the level")
		}

	    return super.insert(kr, callback);
	}
}

export const KnowledgeRepresentations = new KnowledgeRepresentationCollection('kr');