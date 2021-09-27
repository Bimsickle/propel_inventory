import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import StartingScreen from "./components/StartingScreen";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
