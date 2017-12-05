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

  updateString(val){
    this.setState({string:val})
  }


  render() {
    return (
      <div className="App">
        <input onChange={(e)=> this.updateString(e.target.value)}/>
        <h4>{this.state.string}</h4>
      </div>
    );
  }
}

export default App;
