import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';

import Items from './components/Items'

class DriverStandings extends Component {

    state = {
        pilotsWinners: [],
        loading: true,
        season: ''
    }

    componentDidMount() {
        const season = this.props.route.params.year
        new F1APIService().getPilotsWinners(season)
        .then(pilotsWinners => this.setState({ pilotsWinners, loading: false, season }))
        .catch(error => {
            console.log(error)
            this.setState({ loading: false, season })
        })
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
                                <Title>{ `Temporada ${this.state.season}` }</Title>
                            </Body>
                        </Header>
                        <Content padder>
                            <Items pilotsWinners={ this.state.pilotsWinners } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default DriverStandings;