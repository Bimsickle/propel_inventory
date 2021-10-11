import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomepageNav from "./components/HomepageNav";
import Header from "./components/Header";
import ItemDetails from "./components/ItemDetails";
import AddItemOverlay from "./components/AddItemOverlay";
import AddItemManually from "./components/AddItemManually";
import Alerts from "./components/Alerts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Homepage />
        <HomepageNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
