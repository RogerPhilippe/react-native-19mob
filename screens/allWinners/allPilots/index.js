import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../../services/F1APIService';

import Items from './components/Items'

class AllPilotsWinners extends Component {

    state = {
        pilots: [],
        loading: true
    }

    componentDidMount() {
        new F1APIService().getDriverStandings()
        .then(pilots => this.setState({ pilots, loading: false }))
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
                                <Title>{ `Campeões de 2000 até 2019` }</Title>
                            </Body>
                        </Header>
                        <Content padder>
                            <Items pilots={ this.state.pilots } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default AllPilotsWinners;
