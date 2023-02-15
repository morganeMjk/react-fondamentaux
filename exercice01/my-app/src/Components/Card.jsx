import React from 'react'
import './Card.css'

function Card(props) {
    const{title,image,description} = props
    return (
        <div className="card">
            <h1 className="card__title">{title}</h1>
            <img className="card__image" alt="image de produit" src={image}></img>
            <p className="card__description">{description}</p>
        </div>
    )
}

export default Card;