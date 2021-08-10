import React from 'react';
import styles from './cardPreview.module.css'

const CardPreview = ({ user }) => {
    return (
      <div className={styles.cardPreview}>
        <h1>Card Preview</h1>
        {Object.values(user).map(value => (
          <ul className={styles.card}>
              <img className={styles.img} src='images/default_logo.png' alt='deault' />
            <div className={styles.text}>
                <h3>{value.name}, {value.company}</h3>
                <p>{value.mail}</p>
                <p>{value.mes}</p>
            </div>
          </ul>
        ))}
      </div>
    );
}

export default CardPreview;