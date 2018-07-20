import React, { Component } from 'react';
import './Signin.scss';
import axios from '../../axios/getAxiosInstance';

class Signin extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <div className="signin">
                <form>
                    <input type="text"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}/>

                    <input type="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={(e) => this.setState({password: e.target.value})}/>
                    
                    <button className="signin-button" onClick={this.signin}>Lets Go</button>
                </form>
            </div>
        )
    }

    signin = (e) => {
        e.preventDefault();

        const request = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/signin', request).then((response) => {
            console.log(response);
        }).catch((ex) => {
            console.log(ex);
        });

    }

}

export default Signin;