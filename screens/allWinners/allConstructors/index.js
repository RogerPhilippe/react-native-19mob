import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../../services/F1APIService';

import Items from './components/Items'

class AllConstrtuctorsWinners extends Component {

    state = {
        constructors: [],
        loading: true
    }

    componentDidMount() {
        new F1APIService().getConstrtuctorsStandings()
        .then(constructors => this.setState({ constructors, loading: false }))
        .catch(error => console.log(error))
    }

    render() {
        return(
            <View>
                { 
                    this.state.loading ? 
                    <Spinner color='green'/> : 
                    <Container>
                        <Header>
                            <Body>
                                <Title>{ `Campeãs de 2000 até 2019` }</Title>
                            </Body>
                        </Header>
                        <Content padder>
                            <Items constructors={ this.state.constructors } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default AllConstrtuctorsWinners;
