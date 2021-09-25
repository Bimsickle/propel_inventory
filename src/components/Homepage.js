import React from "react";
import InventoryList from "./InventoryList";
import ItemDetails from "./ItemDetails";
import ItemList from "./ItemList";
import LocationList from "./LocationList";
import ShoppingList from "./ShoppingList";

export default function Homepage() {
  return (
    <div className="Homepage">
      Hello from Homepage
      <InventoryList />
      <ItemDetails />
      <ItemList />
      <LocationList />
      <ShoppingList />
    </div>
  );
}
