import React, { Component } from 'react';
import { Container, Header, Content, Accordion } from "native-base";
import { Text, View } from 'react-native';
import { F1APIService } from '../../services/F1APIService';

class Season extends Component {

    state = {
        races: [],
    }

    componentDidMount() {
        new F1APIService().getSeasonInfo(this.props.route.params.year)
        .then(seasonInfo => this.setState({ races: seasonInfo }) )
        .catch(error => console.error(error) )
    }

    renderRaces() {
        const { races } = this.state;

        var accordionItens = []
        races.forEach(race => accordionItens.push( 
            { 
                title: race.raceName, 
                content: 
                `Corrida ${race.round}\nCircuito: ${race.Circuit.circuitName}\nPais: ${race.Circuit.Location.country}\nData: ${race.date}\nHora: ${race.time}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)
    }

    render() {
        return(
            <Container>
                <Header />
                <Content padder>
                    { this.renderRaces() }
                </Content>
            </Container>
        );
    }
}

export default Season;