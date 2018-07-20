import React, { Component } from 'react';
import './ToggleButton.scss';
import PropTypes from 'prop-types';

class ToggleButton extends Component {

    state = {
        isOn: this.props.isOn
    }

    render() {
        return (
            <div className={this.getToggleButtonClasses()}
                 onClick={this.ToggleButtonClick}>
                <div className={this.getSwitchButtonClasses()}></div>
            </div>
        )
    }

    getToggleButtonClasses = () => {
        let classes = ['toggle-button'];
        if (this.state.isOn)
            classes.push('on');
        if (this.props.type === 'rounded')
            classes.push('rounded');
        if (this.props.className)
            classes.push(this.props.className);
        return classes.join(' ');
    }

    getSwitchButtonClasses = () => {
        let classes = ['switch-button'];
        if (this.state.isOn)
            classes.push('on');
        return classes.join(' ');
    }

    ToggleButtonClick = () => {
        let isOn = !this.state.isOn;
        this.setState({
            isOn: isOn
        });
        if (this.props.changed)
            this.props.changed(isOn);
    }

}

ToggleButton.propTypes = {
    isOn: PropTypes.bool,
    type: PropTypes.string
}

ToggleButton.defaultProps = {
    isOn: false,
    type: 'rectangle'
}

export default ToggleButton;