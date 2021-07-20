import React from 'react';
import styles from './cardPreview.module.css';

const CardPreview = ({ cards }) => (
    <section className={styles.cardPreview}>
        <h1 className={styles.title}>preview</h1>
        <ul>
            {cards.map(card => (
                <li className={styles.li}>
                    <h3>{card.name}</h3>
                    <p>{card.company}</p>
                    <hr />
                    <p>{card.occupation}</p>
                    <p>{card.mail}</p>
                    <p>{card.introductory}</p>
                </li>
            ))}
        </ul>
    </section>


);

export default CardPreview;