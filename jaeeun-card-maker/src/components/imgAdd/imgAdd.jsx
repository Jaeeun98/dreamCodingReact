import React, { useState } from 'react';
import styles from './imgAdd.module.css'

const ImgAdd = ({ onImgAdd }) => {
    const [file, setFile] = useState();

    const imgFileAdd = e => {
        console.log(e);
        onImgAdd(e.target.files[0]);
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