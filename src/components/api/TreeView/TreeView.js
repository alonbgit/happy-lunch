import React, { Component } from 'react';
import './TreeView.scss';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';

class TreeView extends Component {

    state = {
        visibleItems: [],
        selectedItem: null
    }

    componentWillMount() {
        let visibleItems = [];
        this.props.items.forEach(item => {
            visibleItems.push(item);
        });
        this.setState({
            visibleItems: visibleItems
        })
    }

    render() {
        return (
            <div className="tree-view">
                {this.props.items.map(item => (
                    this.renderItem(item, 0)
                ))}
            </div>
        )
    }

    renderItem = (item, level) => {
        let n = level;
        n++;
        return (
            <div className={this.getItemClasses(item)}
                 key={item.id}
                 style={{paddingLeft: (n * 7) + 'px'}}
                 onClick={(e) => this.onItemClick(e, item)}>
                {item.children && item.children.length > 0 && <Icon name={this.getIconName(item)} className="arrow"/>}
                <span className={this.getIsSelectedClass(item)}>{item.name}</span>
                {item.children && item.children.map(child => (
                    this.renderItem(child, n)
                ))}
            </div>
        )
    }

    getIconName = (item) => {
        let name = 'angle-right';
        if (!item.children || item.children.length === 0)
            return name;
        const isChildrenVisible = this.state.visibleItems.find(c => c === item.children[0]);
        if (!isChildrenVisible)
            return name;
        return 'angle-down';
    }

    onItemClick = (e, item) => {
        e.stopPropagation();
        
        this.setState({
            selectedItem: item
        });

        if (!item.children || item.children.length === 0)
            return;
        const isChildrenVisible = this.state.visibleItems.find(c => c === item.children[0]);
        if (isChildrenVisible) {
            // remove the items
            let newVisibleItems = [...this.state.visibleItems];
            item.children.forEach(child => {
                const index = newVisibleItems.findIndex(c => c === child);
                newVisibleItems.splice(index, 1);
            });
            this.setState({
                visibleItems: newVisibleItems
            });
        }
        else {
            // adds the items
            let newVisibleItems = [...this.state.visibleItems];
            item.children.forEach(child => {
                newVisibleItems.push(child);
            });
            this.setState({
                visibleItems: newVisibleItems
            })
        }

        if (this.props.changed)
            this.props.changed(item);
    }

    getItemClasses = (item) => {
        let classes = ['item'];
        const isItemExist = this.state.visibleItems.find(c => c === item);
        if (isItemExist)
            classes.push('visible');
        return classes.join(' ');
    }

    getIsSelectedClass = (item) => {
        let classes = ['name'];
        if (this.state.selectedItem === item)
            classes.push('selected');
        return classes.join(' ');
    }

}

TreeView.propTypes = {
    items: PropTypes.array.isRequired
}

export default TreeView;