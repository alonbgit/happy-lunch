import React, { Component } from 'react';
import './Home.scss';
import Signin from '../Signin/Signin';

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

export default Home;