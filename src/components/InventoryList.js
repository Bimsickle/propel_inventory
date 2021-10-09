import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./InventoryList.css";

export default function InventoryList() {
  let [loaded, setLoaded] = useState(false);
  let [item, setItem] = useState("null");
  let [products, setProducts] = useState([
    { name: "Apples", expire: "12/05", quantity: 1, location: "fridge" },
    { name: "Bananas", expire: "02/05", quantity: 3, location: "cabinet" },
    { name: "Oranges", expire: "03/03", quantity: 10, location: "cabinet" },
    { name: "Grapes", expire: "04/02", quantity: 4, location: "fridge" },
    { name: "Melon", expire: "23/06", quantity: 5, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
  ]);
  let [inputValue, setInputValue] = useState("");

  function addItem(event) {
    event.preventDefault();
    let newItem = {
      name: inputValue,
      expire: "12/02",
      quantity: 1,
      location: "cabinet",
    };
    let newItems = [...products, newItem];
    console.log(newItems);
    setProducts(newItems);
    setInputValue("");
  }

  function sortExpiry(event) {
    event.preventDefault();
    alert("Hello from sortExpiry");
  }
  function sortQuantity(event) {
    event.preventDefault();
    alert("Hello from sortQuantity");
  }
  function sortLocation(event) {
    event.preventDefault();
    alert("Hello from sortLocation");
  }

  function handleItemChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  return (
    <div className="InventoryList">
      <div className="text-end sorting">
        <label for="location"> Sort by:</label>
        <select name="location" className="dropdown">
          <option value="location">Location</option>
          <option value="expiration date">Expiration Date</option>
          <option value="low in stock">Low in Stock</option>
        </select>
      </div>
      <div>
        <div className="ps-3">
          <strong>Pantry</strong>
        </div>
        {products.map(function (product, index) {
          return (
            <div key={index} className="item-slot row">
              <div className="col-6">
                <div className="product-name">{product.name}</div>
                <div className="quantity">Qty {product.quantity}</div>
              </div>
              <div className="col-6 text-end details-icon">
                <i className="material-icons-outlined">chevron_right</i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ps-3">
        <strong>Refrigerator</strong>
      </div>
      {products.map(function (product, index) {
        return (
          <div key={index} className="item-slot row">
            <div className="col-6">
              <div className="product-name">{product.name}</div>
              <div className="quantity">Qty {product.quantity}</div>
            </div>
            <div className="col-6 text-end details-icon">
              <i className="material-icons-outlined">chevron_right</i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
///<div>{product.name}</div>
///   <div>{product.expire}</div>
///   <div>{product.quantity}</div>
///    <div> {product.location}</div>
