import React, { Component } from 'react';
import './Dropdown.scss';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';

class Dropdown extends Component {

    state = {
        isOpen: false,
        arrowIcon: 'arrow-down',
        selectedItem: null
    }

    componentWillMount() {
        this.setState({
            selectedItem: this.props.selectedItem ? this.props.selectedItem : this.props.items[0]
        });
    }

    getDropDownClasses() {
        let classes = ['dropdown'];
        if (this.state.isOpen)
            classes.push('open');
        return classes.join(' ');
    }

    render() {
        return (
            <div className={this.getDropDownClasses()} 
                 onMouseEnter={this.showDropdown}
                 onMouseLeave={this.hideDropdown}>

                <div className="selected-item">
                    <span>{this.state.selectedItem.name}</span>
                    <Icon name={this.state.arrowIcon}/>
                </div>
                {this.state.isOpen && <div className="items">
                    {this.props.items.map(item => (
                        <div className="item"
                             key={item.id}
                             onClick={() => this.selectItem(item)}>{item.name}</div>
                    ))}
                </div>}

            </div>
        )
    }

    selectItem = (item) => {
        this.setState({selectedItem: item});
        this.hideDropdown();
        if (this.props.changed)
            this.props.changed(item);
    }

    showDropdown = () => {
        this.setState({
            isOpen: true,
            arrowIcon: 'arrow-up'
        });
    }

    hideDropdown = () => {
        this.setState({
            isOpen: false,
            arrowIcon: 'arrow-down'
        })
    }

}

Dropdown.propTypes = {  

    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.object

}

export default Dropdown;