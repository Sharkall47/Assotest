import React, {Component} from 'react'
import { Grid, Form, Header, Image } from 'semantic-ui-react'

export default class FormEdit extends Component {
    state = {
        
    }

    handleAssoChange = (e) => {
        const {association} = this.state
        association[e.target.name] = e.target.value
        this.setState({association})
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    render(){
        return(
            <Header as='h1'>Gestion des associations</Header>
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
                <Form.Input
                    label="URL de l'image link"
                    onChange={this.handleChange}
                    value={image_link}
                    name='image_link'
                    />
                <Button positive>Creer l'association </Button>
            </Form>
            <p>{form_message}</p>
            <p>{JSON.stringify(association)}</p>
            <p>{JSON.stringify(image_link)}</p>
            <Image size='small' src={association.image_url}/>
            <Image size='small' src={image_link}/>
        )
    }
}