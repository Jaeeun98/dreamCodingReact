import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './server/auth';
import StorageImg from './server/storage';

const auth = new Auth();
const storage = new StorageImg();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} storage={storage}/>
  </React.StrictMode>,
  document.getElementById('root')
);
