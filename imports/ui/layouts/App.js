import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Public from '../pages/Public';
import Authenticated from '../pages/Authenticated';
//import AppNavigation from '../components/AppNavigation';

import Index from '../pages/Index';
import KnowledgeRepresentation from '../pages/KnowledgeRepresentation';

const App = appProps => (
  <Router>
    <div className="App">
      {/*<AppNavigation {...appProps} /> */}
      <Grid>
        <Switch>
          <Route exact name="index" path="/" component={Index} />
          <Authenticated exact path="/knowledge-representation" component={KnowledgeRepresentation} {...appProps} />
        </Switch>
        {/*<Switch>
          <Route exact name="index" path="/" component={Index} />
          <Authenticated exact path="/documents" component={Documents} {...appProps} />
          <Authenticated exact path="/documents/new" component={NewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id" component={ViewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id/edit" component={EditDocument} {...appProps} />
          <Public path="/signup" component={Signup} {...appProps} />
          <Public path="/login" component={Login} {...appProps} />
          <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
          <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>*/}
      </Grid>
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
};

const options = {
  propsToWatch: ['loggingIn', 'authenticated']
};

const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};


export default composeWithTracker(composer, options)(App);