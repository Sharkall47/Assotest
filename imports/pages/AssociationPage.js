import React, {Component} from 'react'

export default class AssociationPage extends Component{

    render(){
        const {name} = this.props.match.params
        return (
            <div>
                <h1>ASSOCIATION PAGE</h1>
                <h2>{name}</h2>
            </div>
        )
    }
}