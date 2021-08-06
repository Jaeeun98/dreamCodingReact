import React from 'react';
import CardMaker from '../cardMaker/cardMaker';
import CardPreview from '../cardPreview/cardPreview';
import styles from './card.module.css';

const Card = (props) => {
    return(
        <div className={styles.card}>
            <CardMaker />
            <CardPreview />
        </div>
    )
}

export default Card;