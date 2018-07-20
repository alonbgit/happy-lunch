import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import TreeView from '../../TreeView/TreeView';

class DocTreeView extends Component {

    state = {
        items: [
            {
                id: 1,
                name: 'Asia',
                children: [
                    {
                        id: 2,
                        name: 'Afghanistan'
                    },
                    {
                        id: 3,
                        name: 'Cambodia'
                    },
                    {
                        id: 4,
                        name: 'Israel'
                    }
                ]
            },
            {
                id: 5,
                name: 'Europe',
                children: [
                    {
                        id: 6,
                        name: 'Austria'
                    },
                    {
                        id: 7,
                        name: 'Lithuania'
                    },
                    {
                        id: 8,
                        name: 'Sweden'
                    }
                ]
            },
            {
                id: 9,
                name: 'America',
                children: [
                    {
                        id: 10,
                        name: 'Chile'
                    },
                    {
                        id: 11,
                        name: 'USA',
                        children: [
                            {
                                id: 12,
                                name: 'New York'
                            },
                            {
                                id: 13,
                                name: 'Texas'
                            },
                            {
                                id: 14,
                                name: 'Alabama'
                            }
                        ]
                    },
                    {
                        id: 15,
                        name: 'Bahamas'
                    },
                    {
                        id: 16,
                        name: 'Uruguay'
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div>
                <ComponentDescription>
                    <div key="description">Description for the treeivew</div>
                     <TreeView key="component"
                               items={this.state.items}/>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocTreeView;