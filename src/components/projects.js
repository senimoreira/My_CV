import React, {Component} from 'react';

import {Tab, Tabs, } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Soft Skills</Tab>
                    <Tab>Hard Skills</Tab>
                    <Tab>Avaliação Curricular</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>

                
            </div>    
        );
    }
}


export default Projects;