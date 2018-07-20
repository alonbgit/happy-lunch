import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import Popup from '../../Popup/Popup';

class DocPopup extends Component {

    state = {
        showPopup: false
    }

    render() {
        return (
            <div>
                <ComponentDescription>
                    <div key="description">Description for the popup</div>
                    <div key="component">
                        <button onClick={this.showPopup}>Show Popup</button>
                        {this.state.showPopup && <Popup close={this.closePopup}/>}
                    </div>
                </ComponentDescription>
            </div>
        )
    }

    closePopup = () => {
        this.setState({
            showPopup: false
        })
    }

    showPopup = () => {
        this.setState({
            showPopup: true
        });
    }

}

export default DocPopup;