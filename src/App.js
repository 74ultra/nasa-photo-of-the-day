import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoCard from './components/PhotoCard.js';
import moment from 'moment';
import { randDate } from './components/DateGenerator.js'
import "./App.css";

function App() {
  
  let randomDate = randDate();

  const [data, setData] = useState({});

    
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=o7dGJltoP3OqKjtIzhwX7BvD6dVL88BUpFMhUMmp")
      .then(res => {
        console.log(res.data);
      
        setData(res.data);
      
    })
  }, []);

  const [randData, setRandData] = useState({})

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=o7dGJltoP3OqKjtIzhwX7BvD6dVL88BUpFMhUMmp&date=${randomDate}`)
      .then(results => {
        console.log(results.data);
      
        setRandData(results.data);
      
    })
  }, []);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span>🚀</span>!
      </p>
      <PhotoCard
        title={data.title}
        date={data.date}
        url={data.url}
        explanation={data.explanation}
      />
      <PhotoCard
        title={randData.title}
        date={randData.date}
        url={randData.url}
        explanation={randData.explanation}
      />
    </div>
  );
}

export default App;
