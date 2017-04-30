import { Accounts } from 'meteor/accounts-base';
import {KnowledgeRepresentations} from '../knowledge-representation/knowledge-representation.js';

Accounts.onCreateUser((options, user) => {
	const kr_id = KnowledgeRepresentations.insert({level: 1}, (error, result) => {
		//The insert will fail, error will be set,
		//and result will be undefined or false because "copies" is required.
		//
		//The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().validationErrors()
	});
	
	user.profile = {
		knowledge_representation_id: kr_id,
	};

	return user;
});
