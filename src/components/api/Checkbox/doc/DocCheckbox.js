import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import Checkbox from '../Checkbox';

class DocCheckbox extends Component {

    render() {
        return (
            <div>
                <ComponentDescription>
                    <div key="description">Description for the checkbox</div>
                    <Checkbox checked={true} key="component"/>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocCheckbox;