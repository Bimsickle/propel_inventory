import React, { useState } from "react";
import InventoryList from "./InventoryList";
import ShoppingList from "./ShoppingList";
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
            <div className="active-button homepage-button">INVENTORY</div>

            <div
              className="inactive homepage-button"
              onClick={showShoppingList}
            >
              SHOPPING LIST
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

            <div className="active-button homepage-button">SHOPPING LIST</div>
          </div>
          <ShoppingList />
        </section>
      </div>
    );
  }
}
