import React from 'react';
import moment from 'moment';
import uuid from 'uuid';

import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import blueGrey from 'material-ui/colors/blueGrey';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import {
  Theme, 
  Dashboard,
  FixedAppbar,
  Main,
  Toolbar,
} from 'react-dashboard-mui';

import Activities from './components/activities';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: blue,
  },
  overrides: {
    MuiAppBar: {
      // colorPrimary: {
        //backgroundColor: blueGrey['A200'],
      // },
    },
  },
});

class App extends React.Component {

  state = { 
    activity: null,
  }

  add = () => {
    this.setState({
      activity: {
        id: uuid(),
        kind: 'WORKOUT',
        color: '#C7EFCF',
        description: 'CORRIDA 5KM',
        loggedAt: moment().subtract(1, 'hours').format('LT'),
      },
    })
  }

  render() {
    const add = this.add.bind(this);
    const { activity } = this.state;
    return (
      <Theme customTheme={theme}>
        <Dashboard>
          <FixedAppbar>
            <Toolbar>
              <Button
                fab
                mini
                color="contrast"
                aria-label="add"
                onClick={this.add}
              >
                <AddIcon />
              </Button>
              </Toolbar>
          </FixedAppbar>
          <Main>
            <Activities newActivity={activity} />
          </Main>
        </Dashboard>
      </Theme>
    );
  }
}

export default App;
