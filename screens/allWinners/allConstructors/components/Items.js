import React from 'react';
import { Accordion, Text } from "native-base";

const Items = ({ constructors }) => {

    if ( constructors && constructors.length > 0 ) {

        const reverseList = constructors.reverse()

        var accordionItens = []
        reverseList.forEach(constructor => accordionItens.push( 
            { 
                title: constructor.season, 
                content: `Equipe: ${constructor.ConstructorStandings[0].Constructor.name}\nPontuação: ${constructor.ConstructorStandings[0].points}\nVitórias: ${constructor.ConstructorStandings[0].wins}\nCampeã na corrida: ${constructor.round}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)

    } else { return (<Text>Sem resultados no momento.</Text>) }
}

export default Items;
