import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import StartingScreen from "./components/StartingScreen";

function App() {
  return (
    <div className="App">
      <StartingScreen />
      <Homepage />
    </div>
  );
}

export default App;
