import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row } from 'react-flexbox-grid';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'

import AccountsUIWrapper from '../partials/AccountsUIWrapper'

class Index extends Component {
  render() {
    return (
      <Row>
        <AccountsUIWrapper />
        <h1>HomePage</h1>
        <Link to="/knowledge-representation">Knowledge Representation</Link>
      </Row>
    );
  }
}

export default Index;