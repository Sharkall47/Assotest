import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

export default class NotFound extends Component {
    state = {
        
    }

    render(){
        return(
            <Grid stackable>
                <Grid.Column width={16}>
                    <p> RIP =/ 404 page non trouvée </p>
                </Grid.Column>
            </Grid>
        )
    }
}