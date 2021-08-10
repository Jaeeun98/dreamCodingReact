import React from 'react';
import AddForm from '../addForm/addForm';
import styles from './cardMaker.module.css'

const CardMaker = ({ user, onAddForm }) => {

    return(
        <div className={styles.cardMaker}>
            <h1>Card Maker</h1>
            {user.map(user => (
                <form key={user.id} className={styles.form} >
                    <input type='text' name='name' value={user.name} />
                    <input type='text' name='company' value={user.company} />
                    <select name='color' value={user.color}>
                        <option value='black'>Black</option>
                        <option value='light'>Light</option>
                        <option value='skyBlue'>SkyBlue</option>
                    </select>
                    <input type='text' name='job' value={user.job} />
                    <input type='text' name='mail' value={user.mail} />
                    <textarea name='mes' value={user.mes}></textarea>
                    <button className={styles.img}>IMGBTN</button>
                    <button type='button' className={styles.del}>DELETE</button>
                </form>
            ))}
            <AddForm onAddForm={onAddForm} />
        </div>
        
    )
}

export default CardMaker;