import React, { Component } from 'react';
import { Container, Header, Content, Text, View, Spinner } from "native-base";
import { F1APIService } from '../../services/F1APIService';

import Items from './components/Items'

class ClassificationMenu extends Component {

    state = {
        races: [],
        loading: true
    }

    componentDidMount() {
        new F1APIService().getSeasonInfo(this.props.route.params.year)
        .then(seasonInfo => this.setState({ races: seasonInfo, loading: false }) )
        .catch(error => console.error(error) )
    }

    render() {
        return(
            <View>
                <Items data={ this.state.races } handlerSeason={ this.props.navigation.navigate } />
            </View>
        );
    }
}

export default ClassificationMenu;