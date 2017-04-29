import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schema } from '../schema';
 
export const Section = new Mongo.Collection('section');

Schema.Section = new SimpleSchema({
	name: {
		type: String
	},
	content: {
		type: Object
	},
	lastUpdated: {
		type: Date,
		optional: true
	}
});

Section.attachSchema(Schema.Section);