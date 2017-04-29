import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schema } from '../schema';
 
Schema.UserProfile = new SimpleSchema({
    knowledge_representation_id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    }
});

Schema.User = new SimpleSchema({
	username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    profile: {
        type: Schema.UserProfile
    }
});

Meteor.users.attachSchema(Schema.User);