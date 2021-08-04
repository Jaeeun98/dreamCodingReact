import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './sever/auth_service';
import ImgUploader from './sever/imgUploader';
import ImgInput from './componenets/imgInput/imgInput';
import Database from './sever/database';

const authService = new AuthService();
const imgUploader = new ImgUploader();
const database = new Database();

const FileInput = memo(props => (
  <ImgInput {...props} imgUploader={imgUploader} /> 
))

//const fileInput = <ImgInput {...props} imgUploader={imgUploader} />  
//이런식으로 설정하면 확장성이 떨어짐
//why? props를 다른 props로 전달할 수 없음
//FileInput을 최상위 컴포넌트 밖에서 만든 후 주입하게 되면
//FileInput에 추가하고 싶은 서비스를 최상위 컴포넌트에서 받아올 필요 없이
//여기서 FileInput에 추가하면 됨



ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      database={database}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

