import React from 'react';

const SectionList = (props) => {
    return (
        props.listObj.map(data => (
            <li key={data.id}>
                <div className="view">
                    <img src={data.img} alt="dataImg" />
                </div>
                <div className="text">
                    <p className="title">{data.title}</p>
                    <p className="channelTitle">{data.channelTitle}</p>
                </div>
            </li>
        ))  
    )
}

export default SectionList;