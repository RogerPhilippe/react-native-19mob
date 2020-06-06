import React from 'react';
import { Accordion, Text } from "native-base";

const Items = ({ constructors }) => {

    if ( constructors && constructors.length > 0 ) {

        var accordionItens = []
        constructors.forEach(constructor => accordionItens.push( 
            { 
                title: constructor.name, 
                content: `Nacionalidade: ${constructor.nationality}\n${constructor.url}` } 
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)

    } else { return (<Text>Sem resultados no momento.</Text>) }


}

export default Items;
