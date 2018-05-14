import React, {Component} from 'react'
import { Grid, Card, Icon, Image, Container, Button } from 'semantic-ui-react'
import moment from 'moment'
import CustomStyle from '/client/styles/CustomStyle'

export default class AdminCard extends Component {
    state = {
        
    }


    asso_to_trash = () => {
        const {une_association} = this.props
        Meteor.call('associations.remove', une_association._id)
        // alert('DELETE - '+ une_association._id)
    }

    edit_signal = () => {
        this.props.onEdit_signal(this.props.une_association)
    }

    render(){
        const {une_association, asso_to_trash} = this.props
        return(
                <Grid.Column width={4}>
                        <p> voici : {une_association.name} </p>
                        <Card>
                            <Image src={une_association.image_url ? une_association.image_url : 'https://mobile-cdn.123rf.com/300wm/Isselee/Isselee1510/Isselee151000185/46944336-close-up-d-un-bengal-devant-un-fond-blanc.jpg?ver=6'} />
                            <Card.Content>
                            <Card.Header>
                                {une_association.name}
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                Joined in {moment(une_association.join_date).format("MMM Do YY")}
                                </span>
                            </Card.Meta>
                            <Card.Description>
                                {une_association.description}
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Members
                                </a>
                                <Grid>
                                    <Grid.Column width={16}>
                                        <Button negative animated='vertical' onClick={this.asso_to_trash} className='card_button'>
                                            <Button.Content hidden>DO IT !</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='trash alternate' /> Supprimer
                                            </Button.Content>
                                        </Button>
                                        <Button animated='vertical' onClick={this.edit_signal} className='card_button'>
                                            <Button.Content hidden>DO IT !</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='trash alternate' /> Editer
                                            </Button.Content>
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>
                </Grid.Column>
        )
    }
}