import React, { Component } from 'react';
import './Body.scss';

class Body extends Component {

    render() {
        return (
            <div className="body">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default Body;