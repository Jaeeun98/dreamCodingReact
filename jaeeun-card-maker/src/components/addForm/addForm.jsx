import React, { useRef, useState } from 'react';
import styles from '../cardMaker/cardMaker.module.css'
import ImgAdd from '../imgAdd/imgAdd';

const AddForm = ({ onAddForm, storage }) => {

    const formRef = useRef();
    const [file, setFile] = useState({ fileName:null, fileURL:null })

    const addForm = e => {
        const newCard = {
            id : Date.now(),
            name : e.target.form[0].value || '',
            company : e.target.form[1].value || '',
            color : e.target.form[2].value || '',
            job : e.target.form[3].value || '',
            mail : e.target.form[4].value || '',
            mes : e.target.form[5].value || '',
            fileName : file.fileName || '',
            fileURL : file.fileURL || '',
        }
        onAddForm(newCard);
        formRef.current.reset();
        setFile({ fileName:null, fileURL:null });
    }

    const onImgAdd = (cardId, newFile) => {
      setFile({
        fileName : newFile.fileName,
        fileURL : newFile.fileURL
      })
    }

    return (
      <form className={styles.form} ref={formRef}>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='company' placeholder='company' />
        <select name='color' >
          <option value='black'>Black</option>
          <option value='light'>Light</option>
          <option value='skyBlue'>SkyBlue</option>
        </select>
        <input type='text' name='job' placeholder='job' />
        <input type='text' name='mail' placeholder='e-mail' />
        <textarea name='mes' placeholder='message'></textarea>
        <div className={styles.img}>
            <ImgAdd onImgAdd={onImgAdd} storage={storage} name={file.fileName}/>
        </div>
        <button type='button' className={styles.add} name='add' onClick={addForm}>Add</button>
      </form>
    );
}

export default AddForm;