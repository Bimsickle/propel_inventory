import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function InventoryList() {
  let [loaded, setLoaded] = useState(false);
  let [item, setItem] = useState("null");

  function addItem(event) {
    event.preventDefault();
    alert(`${item} added`);
  }

  function handleItemChange(event) {
    event.preventDefault();
    setItem(event.target.value);
  }

  return (
    <div className="InventoryList">
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Oranges</li>
        <li>Grapes</li>
        <li>Melon</li>
        <li>Berries</li>
      </ul>
      <form onSubmit={addItem}>
        <input type="search" id="search-form" onChange={handleItemChange} />
        <input
          type="submit"
          value="Add item to inventory"
          className="btn btn-primary"
        />
      </form>

      <div>Sort inventory by:</div>
      <button>Expiry date</button>
      <button>Items low in stock</button>
      <button>Items by location</button>
    </div>
  );
}
