import React, { Component } from 'react';
import Activity from './activity';
import EditActivity from './edit';

class Activities extends Component {

  render() {
    const { activity, activities } = this.props;

    const list = activities.map(item => (
      (item.id === activity.id) ?
        <EditActivity
          key={`act-${item.id}`}
          {...item}
        /> :
        <Activity
          key={`act-${item.id}`}
          {...item}
        />
    ));
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Activities;