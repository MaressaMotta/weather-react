import React from 'react';
import Weather from "./Weather.js";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App">
        <div>
        <h1> Weather App</h1>
        <Weather  />
        </div>
      </header>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
