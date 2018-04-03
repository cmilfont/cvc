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

  static childContextTypes = {
    onSave: PropTypes.func,
    onClick: PropTypes.func,
  }

  state = {
    list: [],
    edit: {},
  }

  getChildContext() {
    return {
      onSave:this.onSave,
      onClick: this.onClick,
    }
  }

  componentDidMount() {
    //fiz o ajax
    this.setState({
      ...this.state,
      list: result,
    })
  }

  onClick = (edit) => {
    this.setState({
        ...this.state,
        edit,
    })
  }

  onSave = (activity) => {
    this.setState({
      list: this.state.list.map(item => {
        return (item.id === activity.id) ? activity : item;
      }),
      edit: {},
    });
  }

  render() {
    return (
      <div>
        <Activities
          edit={this.state.edit}
          list={this.state.list}
        />
      </div>
    );

  }

}

export default App;