import React, { useState } from 'react';
import './App.css';
import Class from './components/Class'
import Weather from './components/Weather'

function getDate() {
  const date = Date.now();
  return date;

}
function App() {
  const sun = "Sunny";
  const rain = "Rain";
  const [speeding, setSpeeding] = useState(false)
  const car = speeding ? "policeCar" : "redCar";

  return (
    <div className="App" 
    style={{backgroundColor: "blue", height: "825px", width: "100%"}}
    >
     <h1>App.js</h1>
          {/* props is the action of sending values down to another component. This happens from parent to child., also, props are supposed to be read only */}
     <Class getDate={getDate}/>
     <Weather sun={sun} rain={rain} car={car} speeding={speeding} setSpeeding={setSpeeding}/>
    </div>
  );
}

export default App;
