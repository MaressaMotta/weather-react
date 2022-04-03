import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
        <div className="container">
          <h1> React Weather App</h1>

          <Weather defaultCity="Dublin" />

          <footer>
            This project was coded by{" "}
            <a
              href="https://gifted-knuth-1c773c.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maressa Motta
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MaressaMotta/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://glowing-frangollo-54b3c8.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      
    </div>
  );
}

export default App;
