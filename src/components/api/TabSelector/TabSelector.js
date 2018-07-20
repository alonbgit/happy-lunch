import React, { Component } from 'react';
import './TabSelector.scss';
import PropTypes from 'prop-types';

class TabSelector extends Component {

    state = {
        selectedTab: null
    }

    render() {
        return (
            <div className="tab-selector">
                <div className="tabs">
                    {this.props.tabs.map((tab, index) => (
                        <div className={this.getTabClasses(tab)}
                             key={index}
                             onClick={() => this.onTabSelected(tab)}>{tab.name}</div>
                    ))}
                </div>
                <div className="tab-content">
                    {this.state.selectedTab && this.state.selectedTab.component}
                </div>
            </div>
        )
    }

    getTabClasses = (tab) => {
        let classes = ['tab'];
        if (this.state.selectedTab === tab)
            classes.push('selected');
        return classes.join(' ');
    }

    onTabSelected(tab) {
        this.setState({
            selectedTab: tab
        });
        if (this.props.changed)
            this.props.changed(tab);
    }

}

TabSelector.propTypes = {
    tabs: PropTypes.array.isRequired
}

export default TabSelector;