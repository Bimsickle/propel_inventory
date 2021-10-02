import React from "react";
import InventoryList from "./InventoryList";
import ItemDetails from "./ItemDetails";
import ItemList from "./ItemList";
import LocationList from "./LocationList";
import ShoppingList from "./ShoppingList";
import { Route, Link } from "react-router-dom";
import HomepageNav from "./HomepageNav";

export default function Homepage() {
  return (
    <div className="Homepage">
      <HomepageNav />
      <Route exact path="/shopping-list" component={ShoppingList} />
      <Route exact path="/inventory-list" component={InventoryList} />
      <Route exact path="/item-list" component={ItemList} />
    </div>
  );
}
