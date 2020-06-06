import React from 'react';
import { Accordion, Text } from "native-base";

const Items = ({ pilots }) => {

    if ( pilots && pilots.length > 0 ) {

        const reverseList = pilots.reverse()

        var accordionItens = []
        reverseList.forEach(pilot => accordionItens.push( 
            { 
                title: pilot.season, 
                content: `Piloto: ${pilot.DriverStandings[0].Driver.familyName}, ${pilot.DriverStandings[0].Driver.givenName}\nPontos: ${pilot.DriverStandings[0].points}\nCampeão na corrida: ${pilot.round}\nEquipe: ${pilot.DriverStandings[0].Constructors[0].name}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)

    } else { return (<Text>Sem resultados no momento.</Text>) }
}

export default Items;
