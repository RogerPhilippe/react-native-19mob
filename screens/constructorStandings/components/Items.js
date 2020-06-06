import React from 'react';
import { Accordion, Text } from "native-base";

const Items = ({ constructorsWinners }) => {

    if ( constructorsWinners && constructorsWinners.length > 0 ) {

        var accordionItens = []
        constructorsWinners.forEach(constructorsWinner => accordionItens.push( 
            { 
                title: `${constructorsWinner.Constructor.name} ${constructorsWinner.position == 1 ? ' - Campeã' : ''}`, 
                content: `Pontuação: ${constructorsWinner.points}\nVitórias: ${constructorsWinner.wins}\nNacionalidade: ${constructorsWinner.Constructor.nationality}\n${constructorsWinner.Constructor.url}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)

    } else { return (<Text>Sem resultados no momento.</Text>) }
}

export default Items;
