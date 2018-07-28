import React, { Component } from 'react';
import './GroupItem.scss';
import classnames from 'classnames';
import '../../api/Buttons/buttons.scss';

class GroupItem extends Component {

    render() {
        return (
            <div className="group-item">
                <div className="group-item-header">
                    <div className="name">{this.props.group.name}</div>
                </div>
                <div className="created-date">{this.parseCreatedDate(this.props.group.createdDate)}</div>
                <div className="users">
                    {this.props.group.users.map(user => (
                        <div className="user" key={user.id}>
                            <div className="user-name">{user.name}</div>
                        </div>
                    ))}
                </div>
                <div className="group-buttons">
                    <button className={classnames('btn', 'btn-success', 'join-btn')}>JOIN</button>
                    <button className={classnames('btn', 'btn-danger', 'exit-btn')}>EXIT</button>
                </div>
            </div>
        );
    }

    parseCreatedDate(timestamp) {
        const date = new Date(timestamp);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;  
    }

}

export default GroupItem;