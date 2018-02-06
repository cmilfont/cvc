import React, { Component } from 'react';
import Activity from './activity';
import EditActivity from './edit';

class Activities extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'LOAD' });
  }

  render() {
    const { activity, activities } = this.props.getState();

    const list = activities.map(act => (
      (activity.id === act.id) ?
      <EditActivity save={this.props.save} key={`act-${act.id}`} {...act} />:
      <Activity key={`act-${act.id}`} {...act} />
    ));
    return (
      <div className="activites">
          {list}
      </div>
    );
  }
}

export default Activities;