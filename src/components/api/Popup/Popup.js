import React, { Component } from 'react';
import './Popup.scss';

class Popup extends Component {

    state = {
        popupOpacity: 0,
        overlayOpacity: 0
    }

    render() {
        return (
            <div className="popup">
                <div className="body" style={{opacity: this.state.popupOpacity}}>
                    <div className="exit-button" onClick={this.close}>&#10006;</div>
                    {this.props.children}
                </div>
                <div className="overlay" style={{opacity: this.state.overlayOpacity}}/>
            </div>
        )
    }

    close = () => {
        this.props.close();
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                popupOpacity: 1,
                overlayOpacity: 0.6
            });
        }, 0);
    }

}

export default Popup;