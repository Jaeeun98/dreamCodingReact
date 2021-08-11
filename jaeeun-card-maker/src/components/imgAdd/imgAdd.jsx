import React, { useRef, useState } from 'react';
import styles from './imgAdd.module.css'

const ImgAdd = ({ name, onImgAdd, storage }) => {

    const inputRef = useRef();
    const [loding, setLoding] = useState(false);

    const btnClick = (e) => {
      e.preventDefault();
      inputRef.current.click();
    }

    const imgFileAdd = async e => {
      setLoding(true);
      const snapshot = await storage.imgAdd(e.target.files[0]);
      const cardId = e.target.form.classList[0];

      const file = {
        fileName : snapshot[0].name,
        fileURL : snapshot[1]
      }

      onImgAdd(cardId, file);
      setLoding(false)
    }

    return (
      <div className={styles.imgContainer}>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          accept="image/*"
          name="file"
          onChange={imgFileAdd}
        />
        {!loding && (
          <button
            className={`${styles.btn} ${name ? styles.pink : styles.gray}`}
            onClick={btnClick}
          >
            {name || "NoFild"}
          </button>
        )}
        {loding && <div className={styles.loading}></div>}
      </div>
    );

  
};

export default ImgAdd;