import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schema } from '../schema';
 
export const KnowledgeRepresentation = new Mongo.Collection('kr');

Schema.KnowledgeRepresentation = new SimpleSchema({
	level: {
		type: Number
	}
});

KnowledgeRepresentation.attachSchema(Schema.KnowledgeRepresentation);