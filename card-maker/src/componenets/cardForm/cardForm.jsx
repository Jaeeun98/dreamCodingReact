import React from 'react';
import Btn from '../btn/btn';
import ImgInput from '../imgInput/imgInput';
import styles from '../card/card.module.css';

const CardForm = ({ onSubmit }) => {

    const submit = (e) => {
        e.preventDefault()
        onSubmit(e.target);
    }
    return(
        <form className={styles.form} onSubmit={submit}>
          <input className={styles.input} type="text" name="name" placeholder="name" />
          <input
            className={styles.input}
            type="text"
            name="company"
            placeholder="company"
          />
          <select className={styles.select} name="team">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="colorful">colorful</option>
          </select>
          <input className={styles.input} type="text" name="title" placeholder="title"/>
          <input className={styles.input} type="text" name="mail" placeholder="mail" />
          <textarea className={styles.textarea} name="message"  placeholder="message" />
          <div className={styles.imgInput}>
            <ImgInput />
          </div>
      
          <Btn type='submit' name="Add" />
        </form>
      );
}



export default CardForm;