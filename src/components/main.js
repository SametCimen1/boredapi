import {Link} from 'react-router-dom'
import style from '../style/main.module.css'
import '../style/css/imagehover.css'
function App() {
  return (
    <div className="container">
        <div className = {style.mainHeader}>
            <h1>Are you bored!</h1>
            <h2>Try some of these API's FOR FUN!</h2>
        </div>
        <div className = {style.apiContainer}>
          <div className = {style.card}>
              <Link to = "/activity"><h2>bored API</h2></Link>
          </div>
        </div>
    </div>
  );
}

export default App;
