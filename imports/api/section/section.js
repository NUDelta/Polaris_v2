import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schema } from '../schema';
 
export const Sections = new Mongo.Collection('section');