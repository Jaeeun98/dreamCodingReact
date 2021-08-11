import React, { useState } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Card from './components/card/card';
import Login from './components/login/login';

function App({ auth, storage }) {
  const [user, setUser] = useState({
    0: {
      id: 0,
      name: "jaeeun",
      company: "kakao",
      color: "light",
      job: "frontend",
      mail: "kju9705@gmail.com",
      mes: "Hello",
      fileName : 'jaeeunFile',
      fileURL : null
    },
    1: {
      id: 1,
      name: "jaeeun2",
      company: "kakao",
      color: "light",
      job: "frontend",
      mail: "kju9705@gmail.com",
      mes: "Hello",
      fileName : 'jaeeunFile',
      fileURL : null
    },
    2: {
      id: 2,
      name: "jaeeun3",
      company: "kakao",
      color: "light",
      job: "frontend",
      mail: "kju9705@gmail.com",
      mes: "Hello",
      fileName : 'jaeeunFile',
      fileURL : null
    },
  });
  const onAddForm = card => {
    setUser(user => {
      const update = {...user};
      update[card.id] = card;
      return update;
    });
  }

  const onDeleteForm = cardId => {
    setUser(user => {
      const update = {...user};
      delete update[cardId];
      return update;
    })
    
  }

  const onImgAdd = (cardId, file) => {
    setUser(user => {
      const update = {...user};
      update[cardId].fileName = file.fileName
      update[cardId].fileURL = file.fileURL
      return update
    })
    console.log(user);
    
  }

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login auth={auth} />
          </Route>
          <Route path="/home">
            <Card
              user={user}
              onAddForm={onAddForm}
              onDeleteForm={onDeleteForm}
              onImgAdd={onImgAdd}
              storage={storage}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
//exact : path에 /가 있기 때문에 exact를 쓰지 않으면, home이 아니라 /가 보여짐
//따라서 /에 exact=true를 해줘야 함 (= 경로가 완전히 똑같아야만 이동한다는 의미)
export default App;
