import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';

function App() {
  return (
    <Router>
      <div>
        <Link to='/home'>HOME</Link>
      </div>
      <div>
        <Link to='/about'>ABOUT</Link>
      </div>

      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
