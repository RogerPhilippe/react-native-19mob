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

    if (data && handlerSeason) {

        data = data.reverse()

        return data.map(year => (
            <Button key={year.season} style={style.button} onPress={ () => handlerSeason('Menu', { year })} >
                <Text uppercase="true">{ year.season }</Text>
            </Button> 
        ));

    } else { return (<Text>Sem resultados no momento.</Text>) }

}

export default Seasons;