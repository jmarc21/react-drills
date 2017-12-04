import React, { Component } from 'react';


export default class Username extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
        this.showLogin = this.showLogin.bind(this);
    }

    updateUsername(val) {
        this.setState({ username: val })
    }
    updatePassword(val) {
        this.setState({ password: val })
    }

    showLogin() {
        alert(`Username: ${this.state.username} Password:${this.state.password}`)
    }

    render() {
        return (
            <div className="App">
                <input onChange={(e) => this.updateUsername(e.target.value)} />
                <input onChange={(e) => this.updatePassword(e.target.value)} />
                <button onClick={this.showLogin}>Login</button>
            </div>
        );
    }
}