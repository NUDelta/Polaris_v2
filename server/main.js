import { Meteor } from 'meteor/meteor';

import '../imports/api/section/section.js';
import '../imports/api/knowledge-representation/knowledge-representation.js';

import '/imports/startup/server';

WebApp.connectHandlers.use('/goals', (req, res, next) => {
	let targetID = req.query.id;
	let responseObj = {error: "No matched users"};

	if (targetID) {
		let matchedUsers = Meteor.users.find({_id: targetID}).fetch();
		
		if (matchedUsers.length > 0) {
			responseObj = matchedUsers[0].profile;
		}
	}

	res.writeHead(200);
	res.end(JSON.stringify(responseObj));
});

Meteor.startup(() => {
  // code to run on server at startup
});
