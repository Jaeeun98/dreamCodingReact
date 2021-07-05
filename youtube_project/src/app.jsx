import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Search from './components/search/search';

function App({ youtube }) {
    const [videos, setVideo] = useState([]);

    const onSearchList = text =>{
      youtube
        .search(text) //
        .then(videos => setVideo(videos))
    }

    useEffect(() => {
      youtube
        .mostPopular() //
        .then(videos => setVideo(videos))
    }, [])

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
