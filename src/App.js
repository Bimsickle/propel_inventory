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
import InventoryList from "./components/InventoryList";
import ShoppingList from "./components/ShoppingList";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shopping-list" component={ShoppingList} />
        <Route exact path="/add-item" component={AddItemOverlay} />
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/item-details" component={ItemDetails} />
        <HomepageNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
