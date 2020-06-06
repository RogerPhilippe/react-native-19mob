import React from 'react';
import { Accordion, Text } from "native-base";

const Items = ({ pilotsWinners }) => {

    if ( pilotsWinners && pilotsWinners.length > 0 ) {

        var accordionItens = []
        pilotsWinners.forEach(pilotsWinner => accordionItens.push( 
            { 
                title: `${pilotsWinner.Driver.familyName}, ${pilotsWinner.Driver.givenName} ${pilotsWinner.position == '1' ? ' - Campeão' : ''}`, 
                content: `Equipe: ${pilotsWinner.Constructors[0].name}\Pontuação: ${pilotsWinner.points}\nPosição: ${pilotsWinner.position}\nVitórias: ${pilotsWinner.wins}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)

    } else { return (<Text>Sem resultados no momento.</Text>) }
}

export default Items;
