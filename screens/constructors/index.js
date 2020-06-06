import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';

import Items from './components/Items'

class Constructors extends Component {

    state = {
        constructors: [],
        loading: true,
        season: ''
    }

    componentDidMount() {
        const season = this.props.route.params.year
        new F1APIService().getConstructors(season)
        .then(constructors => this.setState({ constructors, loading: false, season }))
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
                                <Title>{ `Temporada ${this.state.season}` }</Title>
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

export default Constructors;