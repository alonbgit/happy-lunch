import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <span className="header-text">
                    <NavLink to="/">MeatGroup</NavLink>
                </span>
            </div>
        )
    }

}

export default Header;