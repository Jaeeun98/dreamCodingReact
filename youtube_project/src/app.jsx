import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';
import Search from './components/search/search';
import VideoDetail from './components/videoDetail/videoDetail';
import styles from './app.module.css';

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
    //컴포넌트의 경우 className을 할당할 수 없기 때문에 div태그로 묶어서 div에 className을 할당해야 함
  return (
    <div className="app">
      <Search onSearchList={onSearchList}/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
        
      </section>
      
    </div>
  );
}

export default App;
