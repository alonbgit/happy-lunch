import React, { Component } from 'react';
import './ListView.scss';
import PropTypes from 'prop-types';

class ListView extends Component {

    state = {
        selectedItems: []
    }

    constructor(props) {
        super(props);
        this.isShiftPressed = false;
        this.lastSelectedItem = null;
    }

    componentWillMount = () => {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }

    onKeyDown = (e) => {
        this.isShiftPressed = e.keyCode === 16;
    }

    onKeyUp = () => {
        this.isShiftPressed = false;
    }

    render() {
        return (
            <ul className="list-view">
                {this.props.items.map(item => (
                    <li className={this.getItemClasses(item)}
                        key={item.id}
                        onClick={() => this.onItemClick(item)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        )
    }

    getItemClasses = (item) => {
        let classes = ['item'];
        const isItemSelected = this.state.selectedItems.find(c => c === item);
        if (isItemSelected)
            classes.push('selected');
        return classes.join(' ');
    }

    selectItem = (item) => {
        this.lastSelectedItem = item;
        const items = [...this.state.selectedItems];
        const itemIndex = this.state.selectedItems.findIndex((c) => c === item);
        
        if (itemIndex === -1) {
            items.push(item);
        }
        else {
            items.splice(itemIndex, 1);
            this.lastSelectedItem = null;
        }

        this.setState({
            selectedItems: items
        });

        if (this.props.changed) {
            this.props.changed(items);
        }

    }

    onItemClick = (item) => {

        if (this.lastSelectedItem && this.isShiftPressed) {

            const lastSelectedItemIndex = this.props.items.findIndex(c => c === this.lastSelectedItem);
            const itemIndex = this.props.items.findIndex(c => c === item);
            let startIndex, endIndex;
            if (itemIndex < lastSelectedItemIndex) {
                startIndex = itemIndex;
                endIndex = lastSelectedItemIndex;
            }
            else {
                startIndex = lastSelectedItemIndex;
                endIndex = itemIndex;
            }

            let itemsToSelect = [...this.state.selectedItems];
            for(var i = startIndex; i <= endIndex; i++) {
                const itemToSelect = this.props.items[i];
                const isItemSelected = itemsToSelect.find(c => c === itemToSelect);
                if (!isItemSelected) {
                    itemsToSelect.push(itemToSelect);
                }
            }
            this.setState({
                selectedItems: itemsToSelect
            });

            if (this.props.changed) {
                this.props.changed(itemsToSelect);
            }

            return;
        }

        this.selectItem(item);
    }

}

ListView.propTypes = {
    items: PropTypes.array.isRequired
}

export default ListView;