import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import ToggleButton from '../../ToggleButton/ToggleButton';
import './DocToggleButton.scss';

class DocToggleButton extends Component {

    render() {
        return (
            <div className="doc-toggle-button">
                <ComponentDescription>
                    <div key="description">Description for the ToggleButton</div>
                     <div key="component">
                        <ToggleButton className="toggle-button-margin"/>
                        <ToggleButton type="rounded" className="toggle-button-margin"/>
                     </div>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocToggleButton;