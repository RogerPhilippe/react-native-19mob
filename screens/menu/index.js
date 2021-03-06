import React, { Component } from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';

import Items from './components/Items';

const style = StyleSheet.create({
    button: {
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10
    }
});

class Menu extends Component {

    state = {
        items: [
            {id: 1, name: 'Corridas', screen: 'Season'}, 
            {id: 2, name: 'Pilotos', screen: 'Pilots'},
            {id: 3, name: 'Equipes', screen: 'Constructors'},
            {id: 4, name: 'Classificação', screen: 'ClassificationMenu'},
            {id: 5, name: 'Pontuações Pilotos', screen: 'PilotsWinners'},
            {id: 6, name: 'Pontuações Equipes', screen: 'ConstructorsWinners'},
            {id: 7, name: 'Campeões de todos os tempos', screen: 'AllWinners'}
        ],
        year: ''
    }

    componentDidMount() {
        const year = this.props.route.params.year.season;

        this.setState({ year })
    }

    render() {
        return(
            <View>
                <Items data={ this.state.items } year={ this.state.year } handlerSeason={ this.props.navigation.navigate } />
            </View>
        );
    }
}

export default Menu;