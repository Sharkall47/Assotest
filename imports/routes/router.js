import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import LandingPage from '/imports/pages/LandingPage'
import AssociationPage from '/imports/pages/AssociationPage'
import AdminAssociations from '/imports/pages/AdminAssociations'

export default class App extends Component{

    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/admin/associations" component={AdminAssociations} />
                        <Route path="/asso/:name" component={AssociationPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}