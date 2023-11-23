import React from 'react'
import { Link } from 'react-router-dom';

import Card from './Card';

import "./styles/CardSection.scss"




const CardSection = ({cardInfo, category}) => {


    return (
        <section className={`Cards-section${category ? `-for${category}` : ''}`}>
            <div className='Cards-space'>
                {cardInfo.map((card) => (

                    <Card 
                        key={card.id}
                        cardInfo={card}
                        category={category}
                    />
                    
                ))}
            </div>
        </section>
    );
}


export default CardSection;