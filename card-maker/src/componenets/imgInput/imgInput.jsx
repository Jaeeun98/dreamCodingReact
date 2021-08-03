import React, {useRef} from 'react';
import styles from './imgInput.module.css';

const ImgInput = ({ imgUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async e => {
    const uploaded = await imgUploader.upload(e.target.files[0])
    onFileChange({
      name : uploaded.original_filename,
      url: uploaded.url,
    })
    
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
      <button className={styles.btn} onClick={onBtnClick}>
        {name || "No file"}
      </button>
    </div>
  );
};


    

export default ImgInput;