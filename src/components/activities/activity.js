import React, { Component } from 'react';

class Activity extends Component {

  onClick = () => {
    this.props.edit(this.props);
  }

  render() {
    const { id, description } = this.props;
    return (
      <div>
        <div>{description}</div>
        <div>
          <button onClick={this.onClick}>edit</button>
        </div>
      </div>
    );
  }
}

export default Activity;