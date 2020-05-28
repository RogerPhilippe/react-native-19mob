import React, { Component } from 'react';
import { Container, Header, Content, Accordion, View, Spinner } from "native-base";
import { F1APIService } from '../../services/F1APIService';

class Season extends Component {

    state = {
        races: [],
        loading: true
    }

    componentDidMount() {
        new F1APIService().getSeasonInfo(this.props.route.params.year.season)
        .then(seasonInfo => this.setState({ races: seasonInfo, loading: false }) )
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
            <View>
                { 
                    this.state.loading ? 
                    <Spinner color='green'/> : 
                    <Container>
                        <Header />
                        <Content padder>
                            { this.renderRaces() }
                        </Content>
                    </Container>
                 }
            </View>
        );
    }
}

export default Season;