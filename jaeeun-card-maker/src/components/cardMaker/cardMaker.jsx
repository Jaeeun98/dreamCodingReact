import React from 'react';
import AddForm from '../addForm/addForm';
import styles from './cardMaker.module.css'

const CardMaker = ({ user, onAddForm, onDeleteForm }) => {

    const deleteForm = e => {
        onDeleteForm(e);
    }

    console.log(Object.values(user).map(value => console.log(value.name)))


    return(
        <div className={styles.cardMaker}>
            <h1>Card Maker</h1>
            {Object.values(user).map(value => (
                <form key={value.id} className={styles.form} >
                    <input type='text' name='name' value={value.name} />
                    <input type='text' name='company' value={value.company} />
                    <select name='color' value={value.color}>
                        <option value='black'>Black</option>
                        <option value='light'>Light</option>
                        <option value='skyBlue'>SkyBlue</option>
                    </select>
                    <input type='text' name='job' value={value.job} />
                    <input type='text' name='mail' value={value.mail} />
                    <textarea name='mes' value={value.mes}></textarea>
                    <button className={styles.img}>IMGBTN</button>
                    <button type='button' className={styles.del} onClick={deleteForm}>DELETE</button>
                </form>
            ))}
            <AddForm onAddForm={onAddForm} />
        </div>
        
    )
}

export default CardMaker;