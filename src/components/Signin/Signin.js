import React, { Component } from 'react';
import './Signin.scss';
import '../api/Buttons/buttons.scss';
import InvalidCredentialsPopup from './InvalidCredentialsPopup/InvalidCredentialsPopup';
import * as userActions from '../../store/actions/user';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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

                    <span className="new-user">New User? <NavLink to="/signup">Signup</NavLink></span>

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

        this.props.signin(request).then((data) => {

            if (data.success) {
                this.setState({
                    loginFailed: true
                });
            }
            
        }).catch((ex) => {

        });

    }

    closeLoginFailedPopup = () => {
        this.setState({
            loginFailed: false
        });
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (user) => dispatch(userActions.signin(user))
    }
}

export default connect(null, mapDispatchToProps)(Signin);