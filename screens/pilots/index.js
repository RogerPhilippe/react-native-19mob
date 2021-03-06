import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';

import Items from './components/Items'

class Pilots extends Component {

    state = {
        pilots: [],
        loading: true,
        season: ''
    }

    componentDidMount() {
        const season = this.props.route.params.year
        new F1APIService().getPilots(season)
        .then(pilots => this.setState({ pilots, loading: false, season }))
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
                            <Items pilots={ this.state.pilots } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default Pilots;