import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header links={this.props.navs} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.defaultProps = {
  navs: [
    { alias: 'list', text: 'list' },
    { alias: 'about', text: 'about' }
  ]
};

export default App;
