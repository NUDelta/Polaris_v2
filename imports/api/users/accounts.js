import { Accounts } from 'meteor/accounts-base';
import {KnowledgeRepresentation} from '../knowledge-representation/knowledge-representation.js';

Accounts.onCreateUser((options, user) => {
	const kr_id = KnowledgeRepresentation.insert({level: 1, sections:[]}, (error, result) => {
		//The insert will fail, error will be set,
		//and result will be undefined or false because "copies" is required.
		//
		//The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().validationErrors()
	});

	console.log(kr_id);
	
	user.profile = {
		knowledge_representation_id: kr_id
	};

	return user;
});
