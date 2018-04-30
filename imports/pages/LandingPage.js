import React, {Component} from 'react'
import {Grid, Header, Form, Container} from 'semantic-ui-react'


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
                <Grid.Column className="landing-header" width={16}>
                    <Container>
                        <Header as='h1'>ASSOCIATION 1901</Header>
                        <Header as='h3'>Trouvez toutes les assos</Header>
                        <Form onSubmit={this.searchAsso}>
                            <Form.Input
                                onChange={this.handleChange}
                                value={search_text}
                                size="massive"
                                name='search_text'
                                placeholder="Ex: JS&Co, La mélee"
                                />
                        </Form>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}