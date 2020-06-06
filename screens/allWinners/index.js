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

class AllWinnersMenu extends Component {

    state = {
        items: [
            {id: 1, name: 'Pilotos', screen: 'AllPilotsWinners'}, 
            {id: 2, name: 'Equipes', screen: 'AllConstructorsWinners'}
        ],
        year: ''
    }

    componentDidMount() {
        const year = this.props.route.params.year;

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

export default AllWinnersMenu;