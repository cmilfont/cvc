import React from 'react';
import PropTypes from 'prop-types';
import Activities from './components/activities/Activities';

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
    list: []
  }

  componentDidMount() {
    //fiz o ajax
    this.setState({
      list: result,
    })
  }

  render() {
    return (
      <div>
        <Activities list={this.state.list} />
      </div>
    );

  }

}

export default App;