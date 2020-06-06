import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';
import Items from './components/Items';

class Season extends Component {

    state = {
        races: [],
        loading: true,
        season: ''
    }

    componentDidMount() {
        const season = this.props.route.params.year
        new F1APIService().getSeasonInfo(season)
        .then(seasonInfo => this.setState({ races: seasonInfo, loading: false, season }) )
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
                            <Items races={ this.state.races } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }
}

export default Season;