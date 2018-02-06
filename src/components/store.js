import React, { Component } from 'react';
import PropTypes from 'prop-types';

const result = [
  {
    id: 1,
    description: 'Leitura diaria'
  },
  {
    id: 2,
    description: 'Caminhada'
  },
  {
    id: 3, 
    description: 'Jantar'
  }
];

class Store extends Component {

  static childContextTypes = {
    dispatch: PropTypes.func,
    getState: PropTypes.func,
  }

  state = {
    activities: [],
    activity: {},
  }

  getChildContext() {
    return {
      dispatch: this.dispatch,
      getState: this.getStateToWrapper
    }
  }

  getStateToWrapper = () => {
    return this.state;
  }

  dispatch = (action) => {
    
    switch (action.type) {
      case 'LOAD':
        this.load(action.payload);
        break;
    
      default:
        break;
    }
  }

  load = (payload) => {
    //fetch('activities.json').then(result => {})
    this.setState({
      ...this.state,
      activities: result,
    });
  } 

  edit = (activity) => {
    this.setState({
      ...this.state,
      activity
    })
  }

  save = (activity) => {
    this.setState({
      activity: {},
      activities: this.state.activities.map(item => {
        return (activity.id === item.id) ? activity : item;
      })
    });
  }

  render() {
    return this.props.children;
  }
}

export default Store;