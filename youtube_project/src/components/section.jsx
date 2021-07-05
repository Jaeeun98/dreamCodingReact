import React from 'react';
import SectionList from './sectionList';

const Section = (props) => {
    const key = 'AIzaSyDNGkQUxzgaQ5uAPFhyn7wz4rRyBDbVp7I'
      
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${key}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            listData(data.items);
        })

    let listObj = [];    

    function listData(data){
        data.map(data => (
            listObj.push(
                {id : data.snippet.channelId,
                title : data.snippet.title,
                channelTitle : data.snippet.channelTitle,
                img : data.snippet.thumbnails.medium.url},
            )
        )) 
    }    
    return (
        <section>
            <ul className="listUl">
                <SectionList listObj={listObj}/>
            </ul>
        </section>
    )
}

export default Section;