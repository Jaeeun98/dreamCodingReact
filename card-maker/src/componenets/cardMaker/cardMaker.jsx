import React from 'react';
import Card from '../card/card';
import CardForm from '../cardForm/cardForm';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards, addCard, onFormDelete }) => {

    return (
        <section className={styles.cardMaker}>
            <h1 className={styles.title}>maker</h1>
            {cards.map(card => (
                <Card 
                    card={card} 
                    key={card.id}
                    onFormDelete={onFormDelete}
                />    
            ))}   
            <CardForm onSubmit={addCard}/> 
                
        </section>
    
    );

}

export default CardMaker;

