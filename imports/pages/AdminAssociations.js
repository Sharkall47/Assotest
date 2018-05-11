import React, {Component} from 'react'
import { Grid, Button, Form, Container, Header, Image } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'
import {Associations} from '/imports/api/associations/associations'
import AdminCard from '/imports/components/AdminCard'
import AssociationForm from '/imports/components/AssociationForm'

export class AdminAssociations extends Component {
    state = {
    }


    render(){
        const {association, form_message, image_link} = this.state
        const {loading, prop_associations} = this.props
        if (!loading) {
            return(
                <Grid stackable>
                    <Grid.Column width={16}>
                        <Container>
                            <Header as='h1'>Gestion des associations</Header>
                            <AssociationForm/>
                        </Container>
                    </Grid.Column>
                    {prop_associations.length > 0 && 
                        <Container>
                        <Grid>
                        {prop_associations.map( (x) => {
                            return <AdminCard une_association={x} />
                        })}
                        </Grid>
                        </Container>
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
    const prop_associations = Associations.find({}).fetch()
    return {
        loading,
        prop_associations
    }
})(AdminAssociations)