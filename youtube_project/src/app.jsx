import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Search from './components/search';

function App() {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    const key = 'AIzaSyDNGkQUxzgaQ5uAPFhyn7wz4rRyBDbVp7I'
      
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${key}`, { method: 'GET' })
        .then(response => response.json())
        .then(result =>  setVideo(result.items))
        .catch(error => console.log('error', error));
            
  }, [])

  return (
    <div className="app">
      <Search />
      <VideoList 
        videos={videos}
      />
    </div>
  );
}

export default App;
