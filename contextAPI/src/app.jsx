import React from 'react';
import './app.css';
import Text from './components/text';
import TextContext from './context';

function App() {
  return (
    <TextContext.Provider value = { {text : 'text가 변경되었습니다.'} }>
      <Text />
    </TextContext.Provider>
  )
}

export default App;
