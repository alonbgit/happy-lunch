import React, { Component } from 'react';
import './WelcomePopup.scss';
import Popup from '../../api/Popup/Popup';

class WelcomePopup extends Component {

    render() {
        return (
            <Popup close={this.props.close}>
                Welcome. Feel Free to create a new lunch group, or join and existing one!
            </Popup>
        )
    }

}

export default WelcomePopup;