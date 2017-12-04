import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      arr: [
        'spaghetti',
        'ice cream',
        'sushi',
        'bologna',
        'cheese'
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h2>{this.state.arr[0]}</h2>
        <h2>{this.state.arr[1]}</h2>
        <h2>{this.state.arr[2]}</h2>
        <h2>{this.state.arr[3]}</h2>
        <h2>{this.state.arr[4]}</h2>
      </div>
    );
  }
}

export default App;
