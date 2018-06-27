import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import MyComponent from './components/MyComponent';
import api from './services/api';

class App extends Component {

  state = {
    data: []
  };

  constructor(props) {
    super(props);

    this.fetchData();
  }

  fetchData = async () => {
    let data = await api.fetchPopularRepos();
    console.log(data);
    this.setState({data});
  }

  render() {
    let allData = this.state.data.map((repo) => {
      return (
        <li>{repo.name}</li>
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MyComponent name='Dimba' />

        <hr />

        <ul>
          {allData}
        </ul>

        <hr />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
