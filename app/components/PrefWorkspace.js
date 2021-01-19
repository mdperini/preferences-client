import React from 'react'

import {restoreTradingSalesPreferences, saveTradingSalesPreferences } from '../services/trading-sales-preferences.service'

export default  class PrefWorkspace extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            layoutConfig: []
        }
    }

    getPreferences() {
        try {
            restoreTradingSalesPreferences((data) => {
                this.setState({ layoutConfig: data});
            
            })
    
        } catch(error) {
            console.error(error)
        }
    }

    savePreferences(layoutConfig) {
        saveTradingSalesPreferences(layoutConfig, (result) => {
            this.getPreferences();
        })
    }

    componentDidMount() {
       this.getPreferences()
    }

    onAdd() {
        
    }

    render() {
        return (
            <React.Fragment>
                <h1>Preferences Workspace</h1>
            </React.Fragment>
        )
    }
}
