import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Search from './components/search/search';

function App() {
  const key = 'AIzaSyDNGkQUxzgaQ5uAPFhyn7wz4rRyBDbVp7I'
  const [videos, setVideo] = useState([]);

  useEffect(() => { 
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=2&key=${key}`, { method: 'GET' })
        .then(response => response.json())
        .then(result =>  setVideo(result.items))
        .catch(error => console.log('error', error));
            
    }, [])
  
    function onSearchList(text){
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=2&q=${text}&type=video&type=playlist&key=${key}`, { method: 'GET' })
        .then(response => response.json())
        .then(result =>  setVideo(result.items))
        .catch(error => console.log('error', error));
    }

  return (
    <div className="app">
      <Search 
        onSearchList={onSearchList}
      />
      <VideoList 
        videos={videos}
      />
    </div>
  );
}

export default App;
