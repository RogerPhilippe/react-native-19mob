import React from 'react';
import { Button, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button: {
        marginTop: 10,
        marginStart: 10,
        marginEnd: 10
    }
});

const Seasons = ({ data, handlerSeason }) => {

    data = data.reverse()

    return data.map(year => (
        <Button key={year.season} style={style.button} onPress={ () => handlerSeason('Season', { year })} >
            <Text uppercase="true">{ year.season }</Text>
        </Button> 
    ));

}

export default Seasons;