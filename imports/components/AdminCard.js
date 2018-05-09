import React, {Component} from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

export default class AdminCard extends Component {
    state = {
        
    }

    render(){
        const {une_association} = this.props
        return(
            <Grid stackable>
                <Grid.Column width={16}>
                    <p> voici : {une_association.name} </p>
                    <Card>
                        <Image src={une_association.image_url ? une_association.image_url : 'https://mobile-cdn.123rf.com/300wm/Isselee/Isselee1510/Isselee151000185/46944336-close-up-d-un-bengal-devant-un-fond-blanc.jpg?ver=6'} />
                        <Card.Content>
                        <Card.Header>
                            {une_association.name}
                        </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                            Joined in {une_association.name}
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
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        )
    }
}