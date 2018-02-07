import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Activity extends Component {

  static contextTypes = {
    edit: PropTypes.func,
  }

  onClick = () => {
    this.context.edit(this.props);
  }

  render() {
    const { description } = this.props;
    return (
      <div>
        <div>Description:</div>
        <div>{description}</div>
        <button onClick={this.onClick}>Edit</button>
      </div>
    );
  }
}

export default Activity;