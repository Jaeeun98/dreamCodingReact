import React from 'react';
import AddForm from '../addForm/addForm';
import ImgAdd from '../imgAdd/imgAdd';
import styles from './cardMaker.module.css'

const CardMaker = ({ user, onAddForm, onDeleteForm, onImgAdd, storage }) => {

    const deleteForm = e => {
        onDeleteForm(e.target.form.classList[0]);
    }

    return(
        <div className={styles.cardMaker}>
            <h1>Card Maker</h1>
            {Object.values(user).map(value => (
                <form key={value.id} className={`${value.id} ${styles.form}`} >
                    <input type='text' name='name' defaultValue={value.name} />
                    <input type='text' name='company' defaultValue={value.company} />
                    <select name='color' defaultValue={value.color}>
                        <option defaultValue='black'>Black</option>
                        <option defaultValue='light'>Light</option>
                        <option defaultValue='skyBlue'>SkyBlue</option>
                    </select>
                    <input type='text' name='job' defaultValue={value.job} />
                    <input type='text' name='mail' defaultValue={value.mail} />
                    <textarea name='mes' defaultValue={value.mes}></textarea>
                    <div className={styles.img}>
                        <ImgAdd onImgAdd={onImgAdd} storage={storage} name={value.fileName}/>
                    </div>
                    <button type='button' className={styles.del} onClick={deleteForm}>DELETE</button>
                </form>
            ))}
            <AddForm onAddForm={onAddForm} storage={storage}/>
        </div>
        
    )
}

export default CardMaker;