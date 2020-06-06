import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';

import Items from './components/Items'

class ConstructorStandings extends Component {

    state = {
        constructorsWinners: [],
        loading: true,
        season: ''
    }

    componentDidMount() {
        const season = this.props.route.params.year
        new F1APIService().getConstructorsWinners(season)
        .then(constructorsWinners => this.setState({ constructorsWinners, loading: false, season }))
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
                            <Items constructorsWinners={ this.state.constructorsWinners } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default ConstructorStandings;