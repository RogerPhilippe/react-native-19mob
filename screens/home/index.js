import React, { Component } from 'react';
import { View, Spinner } from 'native-base';
import { F1APIService } from '../../services/F1APIService';


import Seasons from './components/Seasons'

class Home extends Component {

    state = {
        years: [],
        loading: true
    }

    componentDidMount() {
        new F1APIService().getSeasons(61)
        .then(seasons => {
            this.setState({ years: seasons, loading: false })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <View>
                { 
                    this.state.loading ? 
                    <Spinner color='green' /> : 
                    <Seasons data={ this.state.years } handlerSeason={ this.props.navigation.navigate } /> 
                }
            </View>
        );
    }
}

export default Home;
