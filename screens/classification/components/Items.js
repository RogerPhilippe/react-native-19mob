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

const Items = ({ data, handlerSeason }) => {

    console.log(data)

    return data.map(race => (
        <Button key={race.round} style={style.button} onPress={ () => handlerSeason('Classification', { race })} >
            <Text uppercase='true'>{ race.raceName }</Text>
        </Button> 
    ));

}

export default Items;