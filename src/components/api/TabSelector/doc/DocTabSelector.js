import React, { Component } from 'react';
import ComponentDescription from '../../../ComponentDescription/ComponentDescription';
import TabSelector from '../TabSelector';
import Checkbox from '../../Checkbox/Checkbox';

const TabOneComponent = () => (
    <div>
        This is the tab one custom component
    </div>
)

const TabTwoComponent = () => (
    <div>
        <div>
            <span>Send Newsletter?</span>
            <Checkbox/>
        </div>
    </div>
)

const TabThreeComponent = () => (
    <div>
        This is the tab three custom component
    </div>
)

class DocTabSelector extends Component {

    state = {
        tabs: [
            {
                name: 'Tab One',
                component: <TabOneComponent/>
            },
            {
                name: 'Tab Two',
                component: <TabTwoComponent/>
            },
            {
                name: 'Tab Three',
                component: <TabThreeComponent/>
            }
        ]
    }

    render() {
        return (
            <div>
                <ComponentDescription>
                    <div key="description">Description for the tabselector</div>
                    <TabSelector key="component" tabs={this.state.tabs}/>
                </ComponentDescription>
            </div>
        )
    }

}

export default DocTabSelector;