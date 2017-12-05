import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      list: [
        'spaghetti',
        'ice cream',
        'sushi',
        'bologna',
        'cheese'
      ]
    }
  }

  updateInput(val) {
    this.setState({ input: val })
  }

  render() {
    let foodsToDisplay = this.state.list.filter((element, index) => {
      return element.includes(this.state.input)
    }).map((element,index)=>{
        return <h2 key={index}>{element}</h2>
    })

    return (
      <div className="App" >
        <input onChange={(e) => this.updateInput(e.target.value)}></input>
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
