import React from 'react';
import initialState from './state';
import Activity from './activity';
import EditActivity from './editActivity';

class Activities extends React.Component {

  state = {
    list: [],
    activity: {},
  }

  componentDidMount() {
    // fetch('ajax').then(list => )
    this.setState({
      list: initialState
    });

  }

  componentWillReceiveProps(nextProps) {    
    if (nextProps.newActivity) {
      this.setState({
        list: [
          ...this.state.list,
          nextProps.newActivity,
        ]
      });
    }
  }

  editActivity = (activity) => {
    this.setState({
      ...this.state,
      activity,
    })
  }

  onChange = (partialActivity) => {
    this.setState({
      ...this.state,
      activity: {
        ...this.state.activity,
        ...partialActivity,
      }
    })
  }

  cancelEditActivity = () => {
    this.setState({
      ...this.state,
      activity: {}
    })
  }

  saveEditActivity = () => {
    const model = this.state.activity;
    const list = this.state.list.map(activity => {
      return (model.id === activity.id)? model: activity
    })
    this.setState({
      list,
      activity: {}
    })
  }

  render() {

    const activities = this.state.list.map(activity => (
      (activity.id === this.state.activity.id) ?
      <EditActivity
        cancelEditActivity={this.cancelEditActivity}
        onChange={this.onChange}
        activity={this.state.activity}
        saveEditActivity={this.saveEditActivity}
        {...activity}
      /> :
      <Activity editActivity={this.editActivity} key={`act-${activity.id}`} {...activity} />
    ));
    return <div>{activities}</div> 
  }
}

export default Activities;