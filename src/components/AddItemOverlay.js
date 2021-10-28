import React, { useState } from "react";
import "./AddItemOverlay.css";
import { Link } from "react-router-dom";

export default function AddItemOverlay() {
  let url = "http://localhost:8000/api/shopping/create-item";
  let [item, setItem] = useState({
    bought: false,
    date: "2021-10-24T14:34:40.778Z",
    item: {
      allergy_info: "string",
      code: "string",
      description: "string",
      ingredients: ["string"],
      name: "",
      size: "string",
    },
    quantity: 0,
  });
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState("");

  function handleItemChange(event) {
    event.preventDefault();
    setName(event.target.value);
    console.log(name);
  }

  function handleQuantityChange(event) {
    event.preventDefault();
    setQuantity(event.target.value);
    console.log(quantity);
  }

  function addItemtoList(event) {
    event.preventDefault();
    setItem({
      bought: false,
      date: "2021-10-24T14:34:40.778Z",
      item: {
        allergy_info: "string",
        code: "string",
        description: "string",
        ingredients: ["string"],
        name: name,
        size: "string",
      },
      quantity: quantity,
    });
    console.log(item);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(function (respones) {
        return respones.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  return (
    <div className="AddItemOverlay">
      <header>
        <Link to="/">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/658/original/Rectangle_1.png?1635022936"
            alt="separator"
          />
        </Link>
      </header>
      <form>
        <input
          type="text"
          placeholder="Add Item"
          className="item-details-form add-item"
          onChange={handleItemChange}
        />
        <div className="row">
          <input
            type="text"
            placeholder="- +"
            className="item-details-form add-quantity col-4"
            onChange={handleQuantityChange}
          />

          <div className="col-4" onClick={addItemtoList}>
            <i className="material-icons add-shopping-list-icon">add_circle</i>{" "}
            <span className="">Add</span>
          </div>
        </div>
      </form>
      <hr />
      <div className="past-item-block">
        <div className="past-items">Past Items</div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span className="item"> Item</span>
        </div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span className="item"> Item</span>
        </div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span className="item"> Item</span>
        </div>
      </div>
    </div>
  );
}
