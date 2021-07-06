import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css'

const VideoList = ({ videos, onVideoClick}) => (
    <ul className={styles.videos}>
        {videos.map(video => (
            <VideoItem 
                key={typeof video.id === 'object' ? video.id.videoId : video.id}
                video={video}
                onVideoClick={onVideoClick}
            />
        ))}
    </ul>
)
    

export default VideoList;