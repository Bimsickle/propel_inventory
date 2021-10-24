import React, { useState, useEffect } from "react";
import "./AddItemManually.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddItemManually() {
  let [inputValue, setInputValue] = useState("");
  let [item, setItem] = useState("");
  let [image, setImage] = useState(null);
  let [size, setSize] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [date, setDate] = useState("MM/DD/YYYY");
  let url = "http://localhost:8000/api/create-item/";
  let [products, setProducts] = useState([
    {
      exp_date: "",
      item: {
        allergy_info: "",
        code: "",
        description: "",
        ingredients: [
          {
            id: "",
            percent_estimate: "",
            percent_max: "",
            percent_min: "",
            rank: "",
            text: "",
            vegan: "",
            vegetarian: "",
          },
        ],
        name: "",
        size: "",
      },
      location: "",
      quantity: 0,
    },
  ]);

  function addItemApi(event) {
    event.preventDefault();
    console.log(products);
    setProducts({
      exp_date: date,
      item: {
        allergy_info: "",
        code: "",
        description: "",
        ingredients: [
          {
            id: "",
            percent_estimate: "",
            percent_max: "",
            percent_min: "",
            rank: "",
            text: ingredients,
            vegan: "",
            vegetarian: "",
          },
        ],
        name: item,
        size: size,
      },
      location: "",
      quantity: quantity,
    });
    console.log(products);

    axios
      .post(url, products)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleItemChange(event) {
    event.preventDefault();
    setItem(event.target.value);
  }
  function handleQuantityChange(event) {
    event.preventDefault();
    setQuantity(event.target.value);
  }
  function handleDateChange(event) {
    event.preventDefault();
    setDate(event.target.value);
  }
  function handleSizeChange(event) {
    event.preventDefault();
    setSize(event.target.value);
  }
  function handleAllergenChange(event) {
    event.preventDefault();
    setIngredients(event.target.value);
  }

  function handleImageUpload(event) {
    event.preventDefault();
    alert("Hello from Image Upload");
  }

  return (
    <div className="AddItemManually pt-3">
      <div className="image-container" onClick={handleImageUpload}>
        <i class="material-icons-outlined add-photo-icon">add_a_photo</i>
        <div className="image-text">Add photos</div>
      </div>
      <form>
        <div className="row">
          <input
            type="text"
            placeholder="Item Name"
            className="col-12 item-name item-details-form"
            onChange={handleItemChange}
          />
          <input
            type="text"
            placeholder="Size"
            className="col-3 item-details-form ms-5"
            onChange={handleSizeChange}
          />
          <input
            type="text"
            placeholder="- +"
            className="col-3 item-details-form quantity"
            onChange={handleQuantityChange}
          />
          <input
            type="text"
            placeholder="MM/DD/YY"
            className="col-3 item-details-form me-5"
            onChange={handleDateChange}
          />
          <input
            type="text"
            placeholder="Add allergen information"
            className="col-12 item-name item-details-form"
            onChange={handleAllergenChange}
          />
        </div>
      </form>
      <div className="buttons m-3">
        <div className="active add-item-button" onClick={addItemApi}>
          ADD ITEM
        </div>
        <Link to="/">
          <div className="inactive add-item-button">CANCEL</div>
        </Link>
      </div>
    </div>
  );
}
