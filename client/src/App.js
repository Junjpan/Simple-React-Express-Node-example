import React, { Component } from 'react';
import Customers from './components/customers/customer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Customers />
      </div>
    );
  }
}

export default App;
