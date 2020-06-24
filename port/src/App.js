import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Truck from "./components/Truck.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Nicks Portfolio</h1>
        </div>
       
      <Truck />
      </div>
    );
  }
}

export default App;
