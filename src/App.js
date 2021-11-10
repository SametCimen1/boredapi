import {Switch, Route, Link} from 'react-router-dom'
import Main from './components/main'
import Activity from './components/activity'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {Main} />
        <Route exact path = "/activity" component = {Activity} />
      </Switch>
    </div>
  );
}

export default App;
