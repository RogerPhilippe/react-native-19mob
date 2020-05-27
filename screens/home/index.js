import React, { Component } from 'react';
import { Button, Text, View } from 'native-base';
import { F1APIService } from '../../services/F1APIService';


import Seasons from './components/Seasons'

class Home extends Component {

    state = {
        years: []
    }

    componentDidMount() {
        new F1APIService().getSeasons(61)
        .then(seasons => {
            this.setState({ years: seasons })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <View>
                <Seasons data={ this.state.years } handlerSeason={ this.props.navigation.navigate } />
            </View>
        );
    }
}

export default Home;
