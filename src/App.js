import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import OnBoard from './containers/OnBoard/OnBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/onBoard" component={OnBoard} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }

}

export default App;
