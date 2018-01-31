import React, { Component } from 'react';
import './App.css';

import { Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import List from './components/List';
import Detail from './components/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header links={this.props.navs} />
        <Route path="/about" component={About} />
        <Route exact path="/list" component={List} />
        <Route path="/list/:id" component={Detail} />
        <Route exact path="/" render={() => (
          <Redirect to="/list" />
        )} />
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
