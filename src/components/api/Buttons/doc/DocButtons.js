import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import '../buttons.scss';
import './DocButtons.scss';

class DocButtons extends Component {

    render() {
        return (
            <div className="doc-buttons">
                <ComponentDescription>
                    <div key="description">Description for the buttons</div>
                    <div key="component">
                        <div className="buttons-list">
                            <button className="btn">Basic</button>
                            <button className="btn btn-default">Default</button>
                            <button className="btn btn-primary">Primary</button>
                            <button className="btn btn-success">Success</button>
                            <button className="btn btn-info">Info</button>
                            <button className="btn btn-warning">Warning</button>
                            <button className="btn btn-danger">Danger</button>
                        </div>
                    </div>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocButtons;