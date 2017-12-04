import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      string: ''
    }
  }

  logScreen(val) {
    this.setState({ string: val })
    console.log(this.state.string)
  }

  message = () =>
    console.log(this.state.string)
  

  render() {
    return (
      <div className='body'>
        <input className='input' onChange={(e) => this.logScreen(e.target.value)}></input>
        <div className='return'>{this.state.string}</div>
      </div>
    );
  }
}

export default App;
