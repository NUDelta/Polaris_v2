import React from 'react';
import TextField from 'material-ui/TextField';
import { Meteor } from 'meteor/meteor';

import {Sections} from '../../api/section/section.js';


class Input extends React.Component {
	constructor(props) {
    super(props);
  }

  changeHandler(e) {
    let setAction = this.props.section.questions;
    setAction[this.props.questionIndex].text = e.target.value;

    console.log(setAction);

  	Sections.update(this.props.section._id, {
      $set: {
        questions: setAction
      }
    });
  }

	render() {
		return (
			<div className="editor">
        <TextField
          id="editor" 
          onChange={this.changeHandler.bind(this)}
          value={this.props.text}
          autoComplete="off"
          fullWidth={true}
          multiLine={true}
        />
			</div>
		);
	}
}

export default Input;