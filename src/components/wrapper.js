import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Wrapper extends Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    getState: PropTypes.func,
  }

  render() {
    const { dispatch, getState } = this.context;
    const { children } = this.props;
    return React.cloneElement(children, {
      dispatch,
      getState,
    });
  }
}

export default Wrapper;