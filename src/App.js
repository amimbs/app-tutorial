import React, { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [location, setLocatio] = useState('');

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=d81cd23bebaee5052dc9f2c66e971401`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Atlanta</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>65</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>12 mph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
