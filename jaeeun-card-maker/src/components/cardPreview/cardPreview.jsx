import React from 'react';
import styles from './cardPreview.module.css'

const CardPreview = ({ user }) => {
    return (
      <div className={styles.cardPreview}>
        <h1>Card Preview</h1>
        <ul>
          {Object.values(user).map((value) => (
            <li key={value.id} className={styles.card}>
              <div className={styles.img}>
                <img src="images/default_logo.png" alt="deault" />
              </div>
              <div className={styles.text}>
                <h3>
                  {value.name}, {value.company}
                </h3>
                <p>{value.mail}</p>
                <p>{value.mes}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default CardPreview;