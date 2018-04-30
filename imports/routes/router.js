import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import LandingPage from '/imports/pages/LandingPage'
import AssociationPage from '/imports/pages/AssociationPage'

export default class App extends Component{

    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/asso/:name" component={AssociationPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}