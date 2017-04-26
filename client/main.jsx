import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/layouts/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});