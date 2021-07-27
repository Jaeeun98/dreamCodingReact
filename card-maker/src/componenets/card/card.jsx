import React from 'react';
import Btn from '../btn/btn';
import ImgInput from '../imgInput/imgInput';
import styles from './card.module.css';

const Card = ({ card, onFormDelete, onFormChange }) => {
    const { name, company, team, title, mail, message, fileName, fileURL, } = card; 
    
    const formDelete = (e) => {
        e.preventDefault();
        onFormDelete({
            ...card, 
            [e.target.name] : e.target.value,
        })
    };
    
    const formChange = (e) => {
        if(e.target.value == null){
            return;
        }
        e.preventDefault();
         
        onFormChange({
            ...card, 
            [e.target.name] : e.target.value,
        })
    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name='name' value={name} onChange={formChange}/>
            <input className={styles.input} type="text" name='company' value={company} onChange={formChange}/>
            <select className={styles.select} name="team" value={team} onChange={formChange}>
                <option value="dark">dark</option>
                <option value="light">light</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name='title' value={title} onChange={formChange}/>
            <input className={styles.input} type="text" name='mail' value={mail} onChange={formChange}/>
            <textarea className={styles.textarea} name="message" value={message} onChange={formChange}/>
            <div className={styles.imgInput}>
                <ImgInput />
            </div>
            
            <Btn name='Delete' onClick={formDelete}/>
            
        </form>
      
    );
}

export default Card;