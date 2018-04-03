import React from 'react';
import PropTypes from 'prop-types';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import meuMiddleware from './api/middleware';
import Activities from './components/activities';

const Workout = () => (<div>Workout!</div>);

class App extends React.Component {

  componentWillMount() {
    this.history = createHistory();
    const middleware = routerMiddleware(this.history);
    const composeEnhancers = composeWithDevTools({});
    const middlewares = [meuMiddleware, middleware];
    const composed = composeEnhancers(applyMiddleware(...middlewares));
    this.store = createStore(
      combineReducers({
        router: routerReducer,
        list: (state = [], action) => {
          if (action.type === 'FETCH_ACTIVITIES_SUCCESSFUL') {
            return action.payload;
          }
          return state;
        }
      }),
      composed
    );
  }

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={this.history}>
          <div>
            <div>
              <Link to="/">Home</Link>
              <Link to="/workout">Workout</Link>
            </div>
            <Route key="workout" path="/Workout" component={Workout} />
            <Route key="home" path="/" component={Activities} />
          </div>
        </ConnectedRouter>
      </Provider>
    );

  }

}

export default App;