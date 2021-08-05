import React from 'react';
import './app.css';
import Section from './components/section/section';

function App({ auth }) {
  return (
    <div className='app'>
      <Section auth={auth}/>
    </div>
    
  );
}

export default App;
