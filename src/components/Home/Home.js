import React, { Component } from 'react';
import './Home.scss';
import Signin from '../Signin/Signin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    
    render() {
        return (
            <div className="home">
                <p className="welcome-msg">Welcome. Signin now and create or join a lunch group!</p>
                <Signin/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps)(Home));