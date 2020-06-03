import React, { Component } from 'react';
import { Text, Container, Header, Content, Accordion, View, Spinner, Body, Title } from "native-base";
import { F1APIService } from '../../services/F1APIService';
import { concat } from 'react-native-reanimated';

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

    renderClassification() {
        const { classification } = this.state;

        if(classification) {

            const qualifyingResults = classification.QualifyingResults

            var accordionItens = []
            qualifyingResults.forEach(qualifyingResult => accordionItens.push( 
                { 
                    title: `${qualifyingResult.Driver.familyName}, ${qualifyingResult.Driver.givenName}`, 
                    content: `Equipe: ${qualifyingResult.Constructor.name}\nNacionalidade: ${qualifyingResult.Constructor.nationality}\n` +
                    `Q1: ${qualifyingResult.Q1} | Q2: ${qualifyingResult.Q2} | Q3: ${qualifyingResult.Q3}`
                }
                ))

            return (<Accordion dataArray={accordionItens} expanded={0} />)
        } else {
            return (<Text>Sem resultados no momento.</Text>)
        }

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
                            { this.renderClassification() }
                        </Content>
                    </Container>
                 }
            </View>
        );
    }

}

export default Pilots;