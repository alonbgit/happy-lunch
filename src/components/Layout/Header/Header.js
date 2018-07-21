import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <span className="header-text">
                    <NavLink to="/">MeatGroup</NavLink>
                </span>
                {this.props.isLoggedIn && <span>Logged</span>}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Header);