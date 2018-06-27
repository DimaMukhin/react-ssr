import React, { Component } from 'react';

import News from './containers/News';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <News initialData={ this.props.initialData }/>
      </div>
    )
  }
}

export default App;