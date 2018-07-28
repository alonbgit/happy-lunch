import React, { Component } from 'react';
import './GroupsPage.scss';
import GroupList from './GroupList/GroupList';
import { connect } from 'react-redux';

class GroupsPage extends Component {

    render() {
        return (
            <div className="groups-page">
                <GroupList groups={this.props.groups}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        groups: state.group.groups
    }
}

export default connect(mapStateToProps)(GroupsPage);