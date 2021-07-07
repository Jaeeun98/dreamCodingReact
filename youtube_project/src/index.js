import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './sevice/youtube';
import axios from "axios";

const http = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {key : process.env.REACT_APP_YOUTUBE_API_KEY}
})
const youtube = new Youtube(http);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

