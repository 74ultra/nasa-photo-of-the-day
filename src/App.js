import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import PhotoCard from './components/PhotoCard.js';
import "./App.css";

function App() {
  
  const [data, setData] = useState({});
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=o7dGJltoP3OqKjtIzhwX7BvD6dVL88BUpFMhUMmp&date=2019-07-15")
      .then(res => {
        console.log(res.data);
      
        setData(res.data);
      
    })
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span>🚀</span>!
      </p>
      <PhotoCard title={data.title} 
                 url={data.url}
                 explanation={data.explanation}/>
    </div>
  );
}

export default App;
