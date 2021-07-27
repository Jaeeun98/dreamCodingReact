import React from 'react';
import Card from '../card/card';
import CardForm from '../cardForm/cardForm';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards, addCard, onFormDelete, onFormChange }) => {

    return (
        <section className={styles.cardMaker}>
            <h1 className={styles.title}>maker</h1>
            {Object.keys(cards).map(key => (
                <Card 
                    card={cards[key]} 
                    key={key}
                    onFormDelete={onFormDelete}
                    onFormChange={onFormChange}
                />    
            ))}   
            <CardForm onSubmit={addCard}/> 
                
        </section>
    
    );

}

export default CardMaker;

