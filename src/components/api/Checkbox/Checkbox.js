import React, { Component } from 'react';
import './Checkbox.scss';
import Icon from 'react-fontawesome';
import PropTypes from 'prop-types';

class Checkbox extends Component {

    state = {
        checked: this.props.checked
    }

    render() {
        return (
            <Icon name={this.getIconName()}
                    className="checkbox"
                    onClick={() => this.onClick()}/>
        )
    }

    getIconName = () => {
        if (this.state.checked)
            return 'check-square';
        return 'square';
    }

    onClick = () => {
        let newValue = !this.state.checked;
        this.setState({
            checked: newValue
        });
        if (this.props.changed)
            this.props.changed(newValue);
    }

}

Checkbox.propTypes = {
    checked: PropTypes.bool
}

Checkbox.defaultProps = {
    checked: false
}

export default Checkbox;