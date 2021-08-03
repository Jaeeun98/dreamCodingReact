import React, { useRef } from 'react';
import Btn from '../btn/btn';
import styles from '../card/card.module.css';

const CardForm = ({ FileInput, onSubmit }) => {

  const formRef = useRef();

  const submit = (e) => {
    e.preventDefault()

    const card = {
      id : Date.now(),
      name : e.target[0].value,
      company : e.target[1].value,
      team : e.target[2].value,
      title : e.target[3].value,
      mail : e.target[4].value,
      message : e.target[5].value,
      fileName : e.target[6].value,
      fileURL : null
    }
    formRef.current.reset();
    onSubmit(card);
  }
    
  return(
    <form className={styles.form} onSubmit={submit} ref={formRef}>
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
        <FileInput />
      </div>
  
      <Btn type='submit' name="Add" />
    </form>
  );  
}



export default CardForm;