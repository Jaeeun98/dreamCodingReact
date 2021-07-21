import React from 'react';
import Preview from '../preview/preview';
import styles from './cardPreview.module.css';

const CardPreview = ({ cards }) => (
    <section className={styles.cardPreview}>
        <h1 className={styles.title}>preview</h1>
        <ul>
            {cards.map(card => (
                <Preview 
                    card={card}
                    key={card.id}
                />
            ))}
        </ul>
    </section>


);

export default CardPreview;