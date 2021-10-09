import React, { useState } from "react";
import InventoryList from "./InventoryList";
import ItemDetails from "./ItemDetails";
import ItemList from "./ItemList";
import LocationList from "./LocationList";
import ShoppingList from "./ShoppingList";
import { Route, Link } from "react-router-dom";
import HomepageNav from "./HomepageNav";
import "./Homepage.css";

export default function Homepage() {
  let [loaded, setLoaded] = useState(false);

  function showShoppingList() {
    setLoaded(true);
  }

  function showInventoryList() {
    setLoaded(false);
  }

  if (loaded === false) {
    return (
      <div className="Homepage">
        <section>
          <div className="buttons">
            <div className="active homepage-button">INVENTORY</div>

            <div
              className="inactive homepage-button"
              onClick={showShoppingList}
            >
              LIST
            </div>
          </div>
          <InventoryList />
        </section>
      </div>
    );
  } else {
    return (
      <div className="Homepage">
        <section>
          <div className="buttons">
            <div
              className="inactive homepage-button"
              onClick={showInventoryList}
            >
              INVENTORY
            </div>

            <div className="active homepage-button">LIST</div>
          </div>
          <ShoppingList />
        </section>
      </div>
    );
  }
}
