import React, { useState } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Card from './components/card/card';
import Login from './components/login/login';

function App({ auth }) {
  const history = useHistory();

  const [user, setUser] = useState([
    {
        name : 'jaeeun',
        company : 'kakao',
        color : 'light',
        job : 'frontend',
        mail : 'kju9705@gmail.com',
        mes : 'Hello'
    },
    {
        name : 'jaeeun2',
        company : 'kakao',
        color : 'light',
        job : 'frontend',
        mail : 'kju9705@gmail.com',
        mes : 'Hello'
    },
])

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login auth={auth} />
          </Route>
          <Route path="/home">
            <Card />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
