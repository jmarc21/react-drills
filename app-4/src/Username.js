import React, {Component} from 'react';

export default class Username extends Component{
    constructor(){
        super();

        this.state = {
            user:'',
            pass:''
        }
    }

    updateUser(val){
        this.setState({user:val})
    }
    updatePass(val){
        this.setState({pass:val})
    }
    login(){
        alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
    }

    render(){
        return(
        <div>
            <input onChange={(e)=> this.updateUser(e.target.value)}type='text' placeholder='Username'/> 
            <input onChange={(e)=> this.updatePass(e.target.value)}type='text' placeholder='Password'/>
            <button onClick={()=> this.login()}>Login</button>
        </div>
        )
    }
}