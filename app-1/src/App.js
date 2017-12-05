import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: ''
    }
  }

  updateScreen(val){
    this.setState({
      string: val
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.updateScreen(e.target.value)} />
        <h2>{this.state.string}</h2>
      </div>
    );
  }
}

export default App;
