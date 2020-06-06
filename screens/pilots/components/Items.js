import React from 'react';
import { Accordion, Text } from "native-base";

const Items = ({ pilots }) => {

    if ( pilots && pilots.length > 0 ) {

        var accordionItens = []
        pilots.forEach(pilot => accordionItens.push( 
            { 
                title: `${pilot.familyName}, ${pilot.givenName}`, 
                content: `Nacionalidade: ${pilot.nationality}\nNúmero carro: ${pilot.permanentNumber}\n${pilot.url}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)

    } else { return (<Text>Sem resultados no momento.</Text>) }
}

export default Items;
