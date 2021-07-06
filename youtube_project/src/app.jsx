import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Search from './components/search/search';
import VideoDetail from './components/videoDetail/videoDetail';

function App({ youtube }) {
    const [videos, setVideo] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onSearchList = text =>{
      youtube
        .search(text) //
        .then(videos => setVideo(videos))
    }

    const selectVideo = (video) => {
      setSelectedVideo(video);
    }

    useEffect(() => {
      youtube
        .mostPopular() //
        .then(videos => setVideo(videos))
    }, [])

  return (
    <div className="app">
      <Search onSearchList={onSearchList}/>
      {
        selectedVideo && <VideoDetail video={selectedVideo}/>
      }
      <VideoList videos={videos} onVideoClick={selectVideo}/>
    </div>
  );
}

export default App;
