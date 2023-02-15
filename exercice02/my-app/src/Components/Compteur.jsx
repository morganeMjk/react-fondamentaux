import React from 'react';

export default function Compteur(props) {


    // on importe le useState [stateNumber, useStateNumber] via les props monNombre et modifNombre
    const { monNombre, modifNombre } = props

    return (
        <div>
            <button onClick={() => modifNombre(parseInt(monNombre) -1)}>-</button>
            <button onClick={() => modifNombre(parseInt(monNombre) +1)}>+</button>
            <button type="reset" onClick={() => (modifNombre(parseInt(monNombre) - parseInt(monNombre)))} >Reset</button>
        </div>
    )
}