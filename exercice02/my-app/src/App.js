import React from 'react';
import Compteur from './Components/Compteur';
import { useState } from 'react';

export default function App() {


    // on donne une valeur initial de 0 au Hook useState - stateNumber définit l'état actuel du nombre - setStateNumber est la fonction qui apporte des modifications à l'état stateNumber
    const [stateNumber, setStateNumber] = useState(0);


    
    return (
        <div>
            {/* lorsqu'on modifie la valeur présente dans l'input, le setter setStateNumber attribut cette même valeur à l'état stateNumber */}
            <input type="text" id='numberInput' name='numberInput' onChange={(e) => setStateNumber(e.target.value)}/>

            {/* on affiche l'état de la valeur */}
            <h1>{stateNumber}</h1>

            {/* on importe le composant Compteur afin qu'il s'affiche et on lui transmet stateNumber et setStateNumber qu'il récupérera via les props */}
            <Compteur monNombre={stateNumber} modifNombre={setStateNumber}  />

        </div>
    )
}