import React, {Component} from 'react'
import { Grid, Button, Form } from 'semantic-ui-react'

export default class AdminAssociations extends Component {
    state = {
        association: {}
    }

    render(){
        const {association} = this.state
        return(
            <Grid stackable>
                <Grid.Column width={16}>
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
                </Grid.Column>
            </Grid>
        )
    }
}