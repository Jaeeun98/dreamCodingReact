import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoList.module.css'

const VideoList = props => (
    <ul className={styles.videos}>
        {props.videos.map(video => (
            <VideoItem 
                key={typeof video.id === 'object' ? video.id.videoId : video.id}
                video={video}
            />
        ))}
    </ul>
)
    

export default VideoList;