import React from 'react';
import Card from '../card/card';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards }) => {

    return (
    
        <section className={styles.cardMaker}>
            <h1 className={styles.title}>maker</h1>
            {cards.map(card => (
                    <Card 
                        card={card} 
                        key={card.id}
                        />
            ))}    
                
        </section>
    
    );

}

export default CardMaker;

