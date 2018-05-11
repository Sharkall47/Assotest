import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class FormEdit extends Component {
    state = {
        association: {}
    }

    componentWillReceiveProps(props){
        props.edit_asso && this.setState({association: props.edit_asso})
    }

    reset_association = () => {
        const initial_asso = {}
        Object.keys(this.state.association).map((attr) => {
            initial_asso[attr] = ""
        })
        this.setState({association: initial_asso})
    }

    handleAssoChange = (e) => {
        const {association} = this.state
        association[e.target.name] = e.target.value
        this.setState({association})
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    submit_form = (e) => {
        e.preventDefault()
        if(this.props.edit_asso){
            Meteor.call('associations.update', this.state.association, (error, result) => {
                if (error) {
                    console.log('ERREUR DE CALL ASSOCIATION INSERT', error.message)
                    this.setState({form_message: "Erreur de creation"})
                }else {
                    console.log('ASSOCIATION MODIFIEE YAII !!')
                    this.reset_association()
                    this.props.onSubmitForm()
                }
            } )
        }else{
            Meteor.call('associations.insert', this.state.association, (error, result) => {
                if (error) {
                    console.log('ERREUR DE CALL ASSOCIATION INSERT', error.message)
                    this.setState({form_message: "Erreur de creation"})
                }else {
                    console.log('ASSOCIATION CREEE YAII !!')
                    this.reset_association()
                    this.props.onSubmitForm()
                }
            } )
        }
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
                <Button positive>{this.props.edit_asso ? "Modifier" : "Créer"} l'association </Button>
            </Form>
        )
    }
}
