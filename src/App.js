import React from 'react';
import PropTypes from 'prop-types';
import Highlight from './components/highlight/Highlight';
import Activities from './components/activities/Activities.js';

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

  state = {
    edit: {},
    list: []
  }

  componentDidMount() {
    //chamo ajax
    this.setState({
      ...this.state,
      list: result,
    });
  }

  onEdit = (edit) => {
    this.setState({
        ...this.state,
        edit,
    });
  }

  onSelect = (id, text) => {
    console.warn('Vou fazer o Ajax', id, text);
  }

  render() {
    const { edit, list } = this.state; 
    return (
      <Highlight onSelect={this.onSelect}>
        <Activities edit={edit} list={list} />
      </Highlight>
    );
  }

}

export default App;