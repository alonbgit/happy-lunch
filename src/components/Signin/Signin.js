import React, { Component } from 'react';
import './Signin.scss';
import '../api/Buttons/buttons.scss';
import InvalidCredentialsPopup from './InvalidCredentialsPopup/InvalidCredentialsPopup';
import * as userActions from '../../store/actions/user';
import * as loaderActions from '../../store/actions/loader';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Loader from '../Loader/Loader';

class Signin extends Component {

    state = {
        email: '',
        password: '',
        loginFailed: false,

        errors: {
            emailRequired: false,
            passwordRequired: false
        }
    }

    render() {
        return (
            <div className="signin">
                <form onSubmit={this.signin}>
                    <input type="text"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}
                           className={classnames({'input-error': this.state.errors.emailRequired})}/>

                    <input type="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={(e) => this.setState({password: e.target.value})}
                           className={classnames({'input-error': this.state.errors.passwordRequired})}/>
                    
                    <button className="btn btn-success signin-button">Lets Go</button>

                    <span className="new-user">New User? <NavLink to="/signup">Signup</NavLink></span>

                </form>

                {this.state.loginFailed && <InvalidCredentialsPopup close={this.closeLoginFailedPopup}/>}

                <Loader/>

            </div>
        )
    }

    validate = () => {

        const errors = {...this.state.errors};
        for(var key in errors)
            errors[key] = false;

        if (this.state.email.trim() === '')
            errors.emailRequired = true;

        if (this.state.password === '')
            errors.passwordRequired = true;

        this.setState({
            errors
        });

        for(var key in errors) {
            if (errors[key])
                return false;
        }

        return true;

    }

    signin = (e) => {
        e.preventDefault();

        if (!this.validate())
            return;

        const request = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.showLoader();

        this.props.signin(request).then((data) => {

            this.setState({
                loginFailed: !data.success
            });

            this.props.hideLoader();
        
        }).catch((ex) => {

            this.props.hideLoader();

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
        signin: (user) => dispatch(userActions.signin(user)),
        showLoader: () => dispatch(loaderActions.showLoader()),
        hideLoader: () => dispatch(loaderActions.hideLoader())
    }
}

export default connect(null, mapDispatchToProps)(Signin);