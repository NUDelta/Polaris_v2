import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/layouts/App.js';

const MaterialApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);


Meteor.startup(() => {
  render(<MaterialApp />, document.getElementById('react-root'));
});