import React, { Component } from 'react';
import { Container, Header, Content, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';
import Items from './components/Items';

class Pilots extends Component {

    state = {
        classification: null,
        loading: true
    }

    componentDidMount() {
        const { season, round } = this.props.route.params.race
        new F1APIService().getClassification(season, round)
        .then(result => this.setState({ classification: result, loading: false }))
        .catch(error => console.log(error))
    }

    renderTitle() {

        const { classification } = this.state;

        if(classification) { return classification.raceName } 
        else { return }

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
                                <Title>{ this.renderTitle() }</Title>
                            </Body>
                        </Header>
                        <Content padder>
                            <Items classification={ this.state.classification } />
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default Pilots;