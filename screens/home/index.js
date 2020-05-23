import React, { Component } from 'react';
import { Button, Text, View } from 'native-base';

import Seasons from './components/Seasons'

class Home extends Component {
    render() {
        return(
            <View>
                <Seasons handlerSeason={ this.props.navigation.navigate } />
            </View>
        );
    }
}

export default Home;