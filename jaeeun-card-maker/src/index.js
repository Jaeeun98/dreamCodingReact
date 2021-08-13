import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Auth from './server/auth';
import StorageImg from './server/storage';
import Database from './server/database';

const auth = new Auth();
const storage = new StorageImg();
const database = new Database();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} storage={storage} database={database}/>
  </React.StrictMode>,
  document.getElementById('root')
);
