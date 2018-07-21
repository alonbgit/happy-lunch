import React, { Component } from 'react';
import './Signin.scss';
import '../api/Buttons/buttons.scss';
import axios from '../../axios/getAxiosInstance';
import InvalidCredentialsPopup from './InvalidCredentialsPopup/InvalidCredentialsPopup';

class Signin extends Component {

    state = {
        email: '',
        password: '',
        loginFailed: false
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
                    
                    <button className="btn btn-success signin-button" onClick={this.signin}>Lets Go</button>
                </form>

                {this.state.loginFailed && <InvalidCredentialsPopup close={this.closeLoginFailedPopup}/>}

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

            if (!response.data.success) {
                this.setState({
                    loginFailed: true
                });
            }

        }).catch((ex) => {

            this.setState({
                loginFailed: true
            });

        });

    }

    closeLoginFailedPopup = () => {
        this.setState({
            loginFailed: false
        });
    }

}

export default Signin;