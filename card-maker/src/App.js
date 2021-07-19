import './App.css';
import Login from './componenets/login/login';

function App({authService}) {
  return (
    <div className="App">
      <Login authService={authService}/>
    </div>
  );
}

export default App;
