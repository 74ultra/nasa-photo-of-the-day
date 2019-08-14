import React, { useState } from "react";
import axios from 'axios';
import PhotoCard from './components/PhotoCard.js';
import "./App.css";

function App() {
  
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [explanation, setExplanation] = useState("")
  
  axios.get("https://api.nasa.gov/planetary/apod?api_key=o7dGJltoP3OqKjtIzhwX7BvD6dVL88BUpFMhUMmp&date=2019-08-10")
    .then(res => {
      console.log(res.data);
      setTitle(res.data.title);
      setUrl(res.data.url);
      setExplanation(res.data.explanation);
    })

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard title={title} 
                 url={url}
                 explanation={explanation}/>
    </div>
  );
}

export default App;
