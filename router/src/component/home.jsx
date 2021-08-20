import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
    const history = useHistory();
    console.log(props);
    return (
    <>
        <h1>Home</h1>
        <button onClick={() => history.push('/about')}>move</button>
    </>    
    )
}


export default Home;