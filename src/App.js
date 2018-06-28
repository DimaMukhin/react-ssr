import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import routes from './routes';
import api from './services/api';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/news'>News</Link></li>
        </ul>
        <Switch>
          { routes.map((route, i) => { return <Route key={i} {...route} /> }) }
        </Switch>
      </div>
    )
  }
}

export default App;