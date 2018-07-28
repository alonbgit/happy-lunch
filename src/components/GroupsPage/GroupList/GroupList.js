import React, { Component } from 'react';
import './GroupList.scss';
import GroupItem from '../GroupItem/GroupItem';

class GroupList extends Component {

    render() {
        return (
            <div className="group-list">
                {this.props.groups.map(group => (
                    <GroupItem group={group} key={group.id}/>
                ))}
            </div>
        );
    }

}

export default GroupList;