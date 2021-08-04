import React, { memo } from 'react';
import styles from './preview.module.css';

const Preview = memo(({ card }) => {

  const DEFAULT_IMG = '/images/default_logo.png';
  const { name, company, team, title, mail, message, fileURL, } = card; 
  const url = fileURL || DEFAULT_IMG;

  return (
    <li className={`${styles.li} ${getStyles(team)}`} >
      <img className={styles.img} src={url} alt="profile" />
      <div className={styles.text}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.mail}>{mail}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  )
})

function getStyles(team){
    switch(team) {
        case 'dark' : 
            return styles.dark;
        case 'light' :
            return styles.light;
        case 'colorful' : 
            return styles.colorful;

            default : 
            throw new Error(team)
    }
}

export default Preview;