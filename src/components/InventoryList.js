import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function InventoryList() {
  let [loaded, setLoaded] = useState(false);
  let [item, setItem] = useState("null");
  let products = [
    { name: "Apples", expire: "12/05", quantity: 1, location: "fridge" },
    { name: "Bananas", expire: "02/05", quantity: 3, location: "cabinet" },
    { name: "Oranges", expire: "03/03", quantity: 10, location: "cabinet" },
    { name: "Grapes", expire: "04/02", quantity: 4, location: "fridge" },
    { name: "Melon", expire: "23/06", quantity: 5, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
  ];

  function sortExpiry(event) {
    event.preventDefault();
    alert("Hello from sortExpiry");
  }

  function addItem(event) {
    event.preventDefault();
    alert(`${item} added to inventory!`);
  }

  function handleItemChange(event) {
    event.preventDefault();
    setItem(event.target.value);
  }

  return (
    <div className="InventoryList">
      <table>
        <caption>Inventory List</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Expiry Date</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {products.map(function (product, index) {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.expire}</td>
                <td>{product.quantity}</td>
                <td> {product.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form onSubmit={addItem}>
        <input type="search" id="search-form" onChange={handleItemChange} />
        <input
          type="submit"
          value="Add item to inventory"
          className="btn btn-primary"
        />
      </form>

      <div>Sort inventory by:</div>
      <button onClick={sortExpiry}>Expiry date</button>
      <button>Items low in stock</button>
      <button>Items by location</button>
    </div>
  );
}
