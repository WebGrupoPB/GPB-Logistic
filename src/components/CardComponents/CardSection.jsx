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
                        text={card.text} 
                        image={card.imageURL} 
                        linkTo={card.link} 
                        category={category}
                    />
                    
                ))}
            </div>
        </section>
    );
}


export default CardSection;