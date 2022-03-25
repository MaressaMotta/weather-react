import Weather from "./Weather.js";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello World JS</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
