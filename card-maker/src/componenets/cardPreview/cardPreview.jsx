import React from 'react';
import Preview from '../preview/preview';
import styles from './cardPreview.module.css';

const CardPreview = ({ cards }) => (
    <section className={styles.cardPreview}>
        <h1 className={styles.title}>preview</h1>
        <ul>
            {Object.keys(cards).map(key => (
                <Preview 
                    card={cards[key]}
                    key={key}
                />
            ))}
        </ul>
    </section>


);

export default CardPreview;