import React from 'react';
import styles from './cardMaker.module.css';

const CardMaker = ({ cards }) => {

    return (
    
        <section className={styles.cardMaker}>
            <h1 className={styles.title}>maker</h1>
            <ul>
                {cards.map(card => (
                    <li key={card.name}>
                        
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>{card.name}</th>
                                <th>{card.company}</th>
                                <th>{card.team}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{card.occupation}</td>
                                <td>{card.mail}</td>
                            </tr>
                            <tr>
                                <td>{card.introductory}</td>
                            </tr>
                            <tr>
                                <td>{card.name}</td>
                                <td>Delete</td>
                            </tr>
                        </tbody>
                        
                        
                    </table>
                    </li>
                ))}
                
            </ul>
        </section>
    
    );

}

export default CardMaker;

