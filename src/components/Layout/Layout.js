import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import './Layout.scss';
import Header from './Header/Header';
import Body from './Body/Body';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import GroupsPage from '../GroupsPage/GroupsPage';

import { connect } from 'react-redux';
  
const Aux = props => props.children;

class Layout extends Component {

    renderRoutes() {
        
        return (
            <Aux>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/groups" component={GroupsPage}/>
            </Aux>
        )
        
    }

    render() {
        return (
            <div className="layout">
                <Header/>
                <Body>
                    <Switch>
                        {this.renderRoutes()}
                    </Switch>
                </Body>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps)(Layout));