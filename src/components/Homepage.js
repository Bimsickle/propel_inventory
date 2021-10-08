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

  if (loaded === false) {
    return (
      <div className="Homepage">
        <section>
          <div className="buttons">
            <Link to="/inventory-list">
              <div className="active homepage-button">INVENTORY</div>
            </Link>
            <Link to="/shopping-list">
              <div className="inactive homepage-button">LIST</div>
            </Link>
          </div>
          <InventoryList />
        </section>
        <Route exact path="/shopping-list" component={ShoppingList} />
      </div>
    );
  }
}
