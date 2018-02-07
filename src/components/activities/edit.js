import React, { Component } from 'react';

class Activity extends Component {

  save = () => {
    console.log("Salvou, otario");
  }

  render() {
    const { description } = this.props;
    return (
      <div>
        <div>Description:</div>
        <div><input value={description} /> </div>
        <button onClick={this.save}>Save</button>
      </div>
    )
  }
}

export default Activity;