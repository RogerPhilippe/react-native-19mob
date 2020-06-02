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

const Items = ({ data, year, handlerSeason }) => {

    data = data.reverse()

    return data.map(item => (
        <Button key={item.id} style={style.button} onPress={ () => handlerSeason(item.screen, { year })} >
            <Text uppercase='true'>{ item.name }</Text>
        </Button> 
    ));

}

export default Items;