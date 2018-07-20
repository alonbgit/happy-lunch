import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import Dropdown from '../../Dropdown/Dropdown';

class DocDropdown extends Component {

    state = {
        items: [
          {
            id: 1,
            name: 'First Item'
          },
          {
            id: 2,
            name: 'Second Item'
          },
          {
            id: 3,
            name: 'Third Item'
          },
          {
            id: 4,
            name: 'Fourth Item'
          }
        ]
      }

    render() {
        return (
            <div>
                <ComponentDescription>
                    <div key="description">Description for the dropdown</div>
                     <Dropdown items={this.state.items}
                               selectedItem={this.state.items[1]}
                               key="component"/>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocDropdown;