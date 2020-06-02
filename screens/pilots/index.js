import React, { Component } from 'react';
import { Text, Container, Header, Content, Accordion, View, Spinner } from "native-base";
import { F1APIService } from '../../services/F1APIService';

class Pilots extends Component {

    state = {
        pilots: [],
        loading: true
    }

    componentDidMount() {
        new F1APIService().getPilots(this.props.route.params.year)
        .then(pilots => this.setState({ pilots, loading: false }))
        .catch(error => console.log(error))
    }

    renderPilots() {
        const { pilots } = this.state;

        var accordionItens = []
        pilots.forEach(pilot => accordionItens.push( 
            { 
                title: `${pilot.familyName}, ${pilot.givenName}`, 
                content: `Nacionalidade: ${pilot.nationality}\nNúmero carro: ${pilot.permanentNumber}\n${pilot.url}` } 
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
                            { this.renderPilots() }
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default Pilots;