import React from 'react';
import { Accordion, } from "native-base";

const Items = ({ races }) => {

    if ( races && races.length > 0 ) {

        var accordionItens = []
        races.forEach(race => accordionItens.push( 
            { 
                title: race.raceName, 
                content: 
                `Corrida ${race.round}\nCircuito: ${race.Circuit.circuitName}\nPais: ${race.Circuit.Location.country}\nData: ${race.date}\nHora: ${race.time}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)
    } else { return (<Text>Sem resultados no momento.</Text>) }

}

export default Items;