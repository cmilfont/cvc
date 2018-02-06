import React from 'react';
import Activities from './components/activities';
import Store from './components/store';

class App extends React.Component {

  render() {
    return (
      <Store>
        <Activities />
      </Store>
    );
  }

}

export default App;