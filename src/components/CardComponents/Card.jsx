import React from 'react'
import { Link } from 'react-router-dom';


import "./styles/Card.scss"

const CardValores = ({ category, cardInfo}) => {
    const cardClassName = `Card-section${category ? `-for${category}` : ''}`;

    return (
        <div className={cardClassName}>
            <article className='text-card'>
                <h3>{cardInfo.title}</h3>
                <p>{cardInfo.text}</p>
            </article>

            <div className='image-card'>
                <img src={cardInfo.imageURL} alt="icon-valores" className='icon-valores'/>
            </div>
            
        </div>
    );
}


const CardEmpresas = ({ category, cardInfo}) => {
    const cardClassName = `Card-section${category ? `-for${category}` : ''}`;

    return (
        <div className={cardClassName}>
            <aside className='image-card-space'>
                <img src={cardInfo.imageURL} alt="card-image" />
            </aside>

            <article className='text-card-space'>
                <h1>{cardInfo.text}</h1>
            </article>
        </div>
    );
}



const Card = ({ category, cardInfo}) => {
    return (
        <>
            {category === 'Empresas' && <CardEmpresas category={category} cardInfo={cardInfo} />}
            {category === 'Valores' && <CardValores category={category} cardInfo={cardInfo} />}
        </>
    );
}


export default Card;