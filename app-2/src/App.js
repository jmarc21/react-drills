import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: ['spaghetti','ice cream','sushi','bologna','cheese']
    }
  }



  render() {
    let diplayFood = this.state.list.map((element,index)=>{
      return(
        <h2 key={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
        {diplayFood}
      </div>
    );
  }
}

export default App;
