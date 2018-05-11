import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class FormEdit extends Component {
    state = {
        association: {}
    }

    handleAssoChange = (e) => {
        const {association} = this.state
        association[e.target.name] = e.target.value
        this.setState({association})
    }
    
    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    submit_form = (e) => {
        e.preventDefault()
        Meteor.call('associations.insert', this.state.association, (error, result) => {
            if (error) {
                console.log('ERREUR DE CALL ASSOCIATION INSERT', error.message)
                this.setState({form_message: "Erreur de creation"})
            }else {
                console.log('ASSOCIATION CREEE YAII !!')
                this.setState({form_message: "Association creée"})
            }
        } )
    }


    render(){
        const {association} = this.state
        return(
            <Form onSubmit={this.submit_form}>
                <Form.Input
                    label='Nom'
                    onChange={this.handleAssoChange}
                    value={association.name}
                    name='name'
                    />
                <Form.Input
                    label='Description'
                    onChange={this.handleAssoChange}
                    value={association.description}
                    name='description'
                    />
                <Form.Input
                    label="URL de l'image"
                    onChange={this.handleAssoChange}
                    value={association.image_url}
                    name='image_url'
                    />
                <Button positive>Creer l'association </Button>
            </Form>
        )
    }
}
