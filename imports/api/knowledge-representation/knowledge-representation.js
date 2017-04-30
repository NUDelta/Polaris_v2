import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schema } from '../schema';
 
export const KnowledgeRepresentation = new Mongo.Collection('kr');

Schema.KnowledgeRepresentation = new SimpleSchema({
	level: {
		type: Number
	},
	sections: {
		type: Array
	},
	"sections.$": {
		type: Schema.Section,
		optional: true
	}
});

KnowledgeRepresentation.attachSchema(Schema.KnowledgeRepresentation);