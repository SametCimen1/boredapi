import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import style from '../style/activity.module.css'
function App() {


  const [activity, setActivity] = useState();
  
  const getRandomActivity = async() =>{
   const data = await fetch("https://www.boredapi.com/api/activity?");
   const response = await data.json();
   setActivity(response);
  }
  //gets activity
  return (
    <div className="container">
        <div className = {style.welcomeText}>
          <h1>hello from Activity</h1>
        </div>
        <div className = {style.randomActivity}>
           <button onClick = {() => getRandomActivity()}>get random activity</button>
        </div>


        {activity &&  
        <div className = {style.activity}>
           <h1>activity:</h1>


           <h2>{activity.activity}</h2>
           <h2>{activity.type}</h2>
           <h2>{activity.participants}</h2>

           
        </div>}
      
        
    </div>
  );
}

export default App;
