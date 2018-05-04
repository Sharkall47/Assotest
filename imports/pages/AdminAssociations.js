import React, {Component} from 'react'
import { Grid, Button, Form, Container, Header, Image } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'
import {Associations} from '/imports/api/associations/associations'

export class AdminAssociations extends Component {
    state = {
        association: {},
        form_message: ""
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
        const {association, form_message, image_link} = this.state
        const {loading, associations} = this.props
        if (!loading) {
            return(
                <Grid stackable>
                    <Grid.Column width={16}>
                        <Container>
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
    
                        </Container>
                    </Grid.Column>
                    {associations.length > 0 && 
                        <Grid.Column width={16}>
                            {associations.map( association => {
                                return <p>{association.name}</p>
                            })}
                        </Grid.Column>
                    }
                </Grid>
            )

        }else {
            return <p>CA CHARGE PATIENTE UN PEU !!!</p>
        }
    }
}

export default AdminAssociationsContainer = withTracker(() => {
    const associationsPublication = Meteor.subscribe('associations.all')
    const loading = !associationsPublication.ready()
    const associations = Associations.find({}).fetch()
    return {
        loading,
        associations
    }
})(AdminAssociations)