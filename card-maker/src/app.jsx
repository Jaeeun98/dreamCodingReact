import Login from './componenets/login/login';
import styles from './app.module.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './componenets/home/home';
import Database from './sever/database';

function App({ FileInput, authService, database }) {

  return (
    <div className={styles.app}>
      <Router>

        <Switch>
          <Route path='/' exact>
            <Login 
              authService={authService} 
            />
          </Route>
          <Route path='/home'>
            <Home 
              authService={authService} 
              FileInput={FileInput} 
              database={database}
            />
          </Route>
        </Switch>
        
    
      </Router>
      
    </div>
  );
}

export default App;
