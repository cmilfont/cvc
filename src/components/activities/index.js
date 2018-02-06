import React, { Component } from 'react';
import Activities from './list';
import Wrapper from 'components/wrapper';

class Container extends Component {

  render() {
    return (
      <Wrapper>
        <Activities />
      </Wrapper>
    );
  }
}

export default Container;