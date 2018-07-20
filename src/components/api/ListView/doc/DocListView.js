import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import ListView from '../../ListView/ListView';

class DocListView extends Component {

    state = {
        items: [
            {
                id: 1,
                name: 'Apple'
            },
            {
                id: 2,
                name: 'Orange'
            },
            {
                id: 3,
                name: 'Bannana'
            },
            {
                id: 4,
                name: 'Water Melon'
            },
            {
                id: 5,
                name: 'Melon'
            },
            {
                id: 6,
                name: 'Pizza'
            },
            {
                id: 7,
                name: 'Tea'
            }
        ]
    }

    render() {
        return (
            <div>
                <ComponentDescription>
                    <div key="description">Description for the listview</div>
                     <ListView key="component"
                               items={this.state.items}
                               changed={(e) => console.log('changed', e)}/>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocListView;