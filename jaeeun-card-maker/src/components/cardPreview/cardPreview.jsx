import React from 'react';
import styles from './cardPreview.module.css'

const CardPreview = ({ user }) => {
    return (
      <div className={styles.cardPreview}>
        <h1>Card Preview</h1>
        {user.map(user => (
          <ul className={styles.card}>
              <img className={styles.img} src="images/default_logo.png" alt="deault" />
            <div className={styles.text}>
                <h3>{user.name}, {user.company}</h3>
                <p>{user.mail}</p>
                <p>{user.mes}</p>
            </div>
          </ul>
        ))}
      </div>
    );
}

export default CardPreview;