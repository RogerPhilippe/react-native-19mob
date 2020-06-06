import React from 'react';
import { Text, Accordion, } from "native-base";

const Items = ({ classification }) => {

    if(classification) {

        const qualifyingResults = classification.QualifyingResults

        var accordionItens = []
        qualifyingResults.forEach(qualifyingResult => accordionItens.push( 
            { 
                title: `${qualifyingResult.position} - ${qualifyingResult.Driver.familyName}, ${qualifyingResult.Driver.givenName}`, 
                content: `Equipe: ${qualifyingResult.Constructor.name}\nNacionalidade: ${qualifyingResult.Constructor.nationality}\n` +
                `Q1: ${qualifyingResult.Q1 ? qualifyingResult.Q1 : '' } | Q2: ${qualifyingResult.Q2 ? qualifyingResult.Q2 : ''} | Q3: ${qualifyingResult.Q3 ? qualifyingResult.Q3 : ''}`
            }
            ))

        return (<Accordion dataArray={accordionItens} expanded={0} />)
    } else {
        return (<Text>Sem resultados no momento.</Text>)
    }

}

export default Items;