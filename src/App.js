import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    </div>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
