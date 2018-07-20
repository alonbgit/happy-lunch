import React, { Component } from 'react';
import './Layout.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import Home from '../Home/Home';

class Layout extends Component {

    render() {
        return (
            <div className="layout">
                <Header/>
                <Body>
                    <Home/>
                </Body>
                <Footer/>
            </div>
        );
    }

}

export default Layout;