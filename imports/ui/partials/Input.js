import React from 'react';
import TextField from 'material-ui/TextField';
import { Meteor } from 'meteor/meteor';

class Input extends React.Component {
	constructor(props) {
    super(props);
  }

  changeHandler(e) {
  	Meteor.users.update(Meteor.userId(), {
      $set: {
        profile: {
          text: e.target.value
        }
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