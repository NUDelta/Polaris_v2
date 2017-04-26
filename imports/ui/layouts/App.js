import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import { compose } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

//import Public from '../pages/Public';
//import Authenticated from '../pages/Authenticated';
//import AppNavigation from '../components/AppNavigation';

const App = appProps => (
  <Router>
    <div className="App">
      {/*<AppNavigation {...appProps} /> */}
      <h1>TEst</h1>
      <Grid>
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

const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default compose(composer)(App);