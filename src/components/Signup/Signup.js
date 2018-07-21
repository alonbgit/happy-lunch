import React, { Component } from 'react';
import './Signup.scss';
import axios from '../../axios/getAxiosInstance';
import '../api/Buttons/buttons.scss';
import * as EmailValidator from 'email-validator';
import classnames from 'classnames';
import WelcomePopup from './WelcomePopup/WelcomePopup';

class Signup extends Component {

    state = {
        email: '',
        password: '',
        passwordConfirmation: '',
        firstName: '',
        lastName: '',
        
        errors: {
            emailRequired: false,
            passwordRequired: false,
            passwordNotMatch: false,
            firstNameRequired: false,
            lastNameRequired: false,
            invalidEmail: false
        },

        showWelcomePopup: false
    }

    render() {
        return (
            <div className="signup">
                <p className="signup-title">Signup now, and bon appetit!</p>
                <form>

                    <div className="field-item">
                        <input type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            className={classnames({'error-input': this.state.errors.emailRequired || this.state.errors.invalidEmail})}/>
                        {this.state.errors.emailRequired && <span className="error">Email is required</span>}
                        {this.state.errors.invalidEmail && <span className="error">Invalid Email</span>}
                    </div>

                    <div className="field-item">
                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                            className={classnames({'error-input': this.state.errors.passwordRequired})}/>
                        {this.state.errors.passwordRequired && <span className="error">Password is required</span>}
                    </div>

                    <div className="field-item">
                        <input type="password"
                            placeholder="Password Confirmation"
                            value={this.state.passwordConfirmation}
                            onChange={(e) => this.setState({passwordConfirmation: e.target.value})}
                            className={classnames({'error-input': this.state.errors.passwordNotMatch})}/>
                        {this.state.errors.passwordNotMatch && <span className="error">Password confirmation must match</span>}
                    </div>

                    <div className="field-item">
                        <input type="text"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={(e) => this.setState({firstName: e.target.value})}
                            className={classnames({'error-input': this.state.errors.firstNameRequired})}/>
                        {this.state.errors.firstNameRequired && <span className="error">First Name is required</span>}
                    </div>

                    <div className="field-item">
                        <input type="text"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={(e) => this.setState({lastName: e.target.value})}
                            className={classnames({'error-input': this.state.errors.lastNameRequired})}/>
                        {this.state.errors.lastNameRequired && <span className="error">Last Name is required</span>}
                    </div>

                    <button className="btn btn-success signup-button" onClick={this.signup}>Join Now</button>

                </form>

                {this.state.showWelcomePopup && <WelcomePopup close={this.closeWelcomePopup}/>}

            </div>
        )
    }

    validate = () => {
        
        const errors = {...this.state.errors};
        for(let key in errors)
            errors[key] = false;

        if (this.state.email.trim() === '')
            errors.emailRequired = true;
        else if (!EmailValidator.validate(this.state.email.trim()))
            errors.invalidEmail = true;

        if (this.state.password === '')
            errors.passwordRequired = true;
        else if (this.state.password !== this.state.passwordConfirmation)
            errors.passwordNotMatch = true;

        if (this.state.firstName.trim() === '')
            errors.firstNameRequired = true;

        if (this.state.lastName.trim() === '')
            errors.lastNameRequired = true;
        
        this.setState({
            errors
        });

        for(var key in errors) {
            if (errors[key])
                return false;
        }
        return true;

    }

    signup = (e) => {

        e.preventDefault();

        if (!this.validate())
            return;

        const request = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        axios.post('/signup', request).then((response) => {
            if (response.data.success) {
                this.setState({
                    showWelcomePopup: true
                });
            }
        }).catch((ex) => {
            console.log(ex);
        });

    }

    closeWelcomePopup = () => {
        this.setState({
            showWelcomePopup: false
        });
    }

}

export default Signup;