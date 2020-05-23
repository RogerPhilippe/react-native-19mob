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

const years = [ '2020', '2019', '2018', '2017' ]

const Seasons = ({ handlerSeason }) => {
    return years.map(year => ( 
        <Button key={year} style={style.button} onPress={ () => handlerSeason('Season', { year })} >
            <Text>{ year }</Text>
        </Button> 
    ));
}

export default Seasons;