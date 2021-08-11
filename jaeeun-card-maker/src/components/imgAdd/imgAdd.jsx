import React, { useState } from 'react';
import styles from './imgAdd.module.css'

const ImgAdd = ({ onImgAdd, storage }) => {
    const [file, setFile] = useState();

    const imgFileAdd = async e => {
      const snapshot = await storage.imgAdd(e.target.files[0]);
      const cardId = e.target.form.classList[0];

      const file = {
        fileName : snapshot[0].name,
        fileURL : snapshot[1]
      }

      onImgAdd(cardId, file);
    }

    return (
        <input
          accept="image/*"
          name="file"
          type="file"
          className={styles.input}
          onChange={imgFileAdd}
        />
      );

  
};

export default ImgAdd;