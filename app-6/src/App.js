import React, { Component } from 'react';
import './App.css';
// import Todo from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      string: ''
    }
    this.updateString = this.updateString.bind(this)
  }

  updateString(val) {
    console.log(val)
    this.setState({
      string: val
    })
  }

  updateList(){
    this.setState({
      list: [this.state.list,this.state.string]
    })
    console.log(this.state.list)
  }


  render() {
      let list = this.state.list.map((e,i)=>{
        return(
          <h2 key={i}>{e}</h2>
        )
      })
    return (
      <div className="App">
        <h1> My Todo List: </h1>
        <input onChange={(e) => this.updateString(e.target.value)} type='text' placeholder='Enter Task' />
        <button onClick={()=> this.updateList()}>ADD</button>
        {list}
      </div>
    );
  }
}

export default App;