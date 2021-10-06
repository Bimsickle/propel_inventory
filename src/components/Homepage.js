import React from "react";
import InventoryList from "./InventoryList";
import ItemDetails from "./ItemDetails";
import ItemList from "./ItemList";
import LocationList from "./LocationList";
import ShoppingList from "./ShoppingList";
import { Route, Link } from "react-router-dom";
import HomepageNav from "./HomepageNav";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="Homepage">
      <section>
        <div className="buttons">
          <a className="active">INVENTORY</a>
          <a className="inactive">LIST</a>
        </div>
      </section>
      <InventoryList />
      <Route exact path="/shopping-list" component={ShoppingList} />
      <Route exact path="/inventory-list" component={InventoryList} />
    </div>
  );
}
