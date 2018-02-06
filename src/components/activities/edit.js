import React, { Component } from 'react';

class Edit extends Component {

  state = {
    description: '',
  }

  onChange = ({ target: { value: description  } }) => {
    this.setState({
      description,
    })
  }
  
  onClick = () => {
    this.props.save({
      ...this.props,
      ...this.state,
    });
  }

  componentWillMount() {
    const { description } = this.props;
    this.setState({
      description,
    })
  }

  render() {
    const { description } = this.state;
    const { id } = this.props;
    return (
      <div>
        <div>
          <input type="text" value={description} onChange={this.onChange} />
        </div>
        <div>
          <button onClick={this.onClick}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default Edit;