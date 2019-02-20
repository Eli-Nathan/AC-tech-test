import React, { Component } from 'react';
import logo from './ac-logo.svg';
import './App.scss';
import Form from './components/Form.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header ch-text--center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="ch-mt--3">Interest free loan calculator</h1>
        </header>
        <div className="sm:ch-col--10 sm:ch-col--offset-1 md:ch-col--8 md:ch-col--offset-2 lg:ch-col--6 lg:ch-col--offset-3">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
