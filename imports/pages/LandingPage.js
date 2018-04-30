import React, {Component} from 'react'
import {Grid, Header, Form} from 'semantic-ui-react'


export default class LandingPage extends Component{

    state = {
        search_text: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchAsso = () => {}

    render(){
        const {search_text} = this.state
        return (
            <Grid stackable>
                <Grid.Column color="red" className="landing-header" width={16}>
                    <Header as='h1'>ASSOCIATION 1901</Header>
                    <Header as='h3'>Trouvez toutes les assos</Header>
                    <Form onSubmit={this.searchAsso}>
                        <Form.Input
                            onChange={this.handleChange}
                            value={search_text}
                            name='search_text'
                            placeholder="Ex: JS&Co, La mélee"
                        />
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}