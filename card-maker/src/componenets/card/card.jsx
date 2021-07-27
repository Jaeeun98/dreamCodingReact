import React from 'react';
import Btn from '../btn/btn';
import ImgInput from '../imgInput/imgInput';
import styles from './card.module.css';

const Card = ({ card, onFormDelete }) => {
    const { name, company, team, title, mail, message, fileName, fileURL, } = card; 
    
    const formDelete = (e) => {
        e.preventDefault();
        onFormDelete(e.target.form[4].value);
    };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name='name' value={name} />
            <input className={styles.input} type="text" name='company' value={company} />
            <select className={styles.select} name="team" value={team}>
                <option value="dark">dark</option>
                <option value="light">light</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name='title' value={title} />
            <input className={styles.input} type="text" name='mail' value={mail} />
            <textarea className={styles.textarea} name="message" value={message} />
            <div className={styles.imgInput}>
                <ImgInput />
            </div>
            
            <Btn name='Delete' onClick={formDelete}/>
            
        </form>
      
    );
}

export default Card;