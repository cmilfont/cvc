import React from 'react';
import PropTypes from 'prop-types';
import Activities from './components/activities';

const result = [
  {
    id: 1,
    description: 'Leitura diaria'
  },
  {
    id: 2,
    description: 'Workshop'
  }
]

class App extends React.Component {

  static childContextTypes = {
    edit: PropTypes.func,
  }

  state = {
    activities: [],
    activity: {},
  }

  getChildContext() {
    return {
      edit: this.edit
    }
  }

  componentDidMount() {
    // fetch('/activities.json').then(result)
    this.setState({
      activities: result
    });
  }
  
  edit = (activity) => {
    this.setState({
      ...this.state,
      activity,
    })
  }

  render() {

    return (
      <Activities
        activity={this.state.activity}
        activities={this.state.activities}
      />
    );
  }

}

export default App;