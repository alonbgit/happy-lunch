import React, { Component } from 'react';
import './InvalidCredentialsPopup.scss';
import Popup from '../../api/Popup/Popup';

class InvalidCredentialsPopup extends Component {

    render() {
        return (
            <Popup close={this.props.close}>
                Oops.. Please check your email and password again
            </Popup>
        )
    }

}

export default InvalidCredentialsPopup;