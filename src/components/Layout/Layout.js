import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Layout.scss';
import Header from './Header/Header';
import Body from './Body/Body';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';

class Layout extends Component {

    render() {
        return (
            <div className="layout">
                <Header/>
                <Body>
                    <Route exact path="/" component={Home}/>
                    <Route path="/signup" component={Signup}/>
                </Body>
            </div>
        );
    }

}

export default Layout;