import React from 'react';
import Weather from "./Weather.js";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App">
        <div>
          <h1> React Weather App</h1>
          
          <Weather />

          <footer>
            Open sourced on
            <a
              href="https://github.com/MaressaMotta/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
