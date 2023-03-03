import './App.css';
import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Dubai" year={2019} isNew={true} />
          <Welcome title="Island" />
          <Welcome title="Emma" />
        </header>
      </div>
    );
  }
}

export default App;
