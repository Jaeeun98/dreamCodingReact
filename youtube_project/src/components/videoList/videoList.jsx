import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css'

const VideoList = ({ videos, onVideoClick, display}) => (
    <ul className={styles.videos}>
        {videos.map(video => (
            <VideoItem 
                key={typeof video.id === 'object' ? video.id.videoId : video.id}
                video={video}
                onVideoClick={onVideoClick}
                display={display}
            />
        ))}
    </ul>
)
    

export default VideoList;