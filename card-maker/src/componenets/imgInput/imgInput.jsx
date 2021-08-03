import React, {useRef, useState} from 'react';
import styles from './imgInput.module.css';

const ImgInput = ({ imgUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async e => {
    setLoading(true);
    const uploaded = await imgUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });    
  }

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button className={styles.btn} onClick={onBtnClick}>
          {name || "No file"}
        </button>
      )}

      {loading && <div className={styles.loading}></div>}
    </div>
  );
};


    

export default ImgInput;