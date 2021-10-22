import React, { useState, useEffect } from "react";
import "./AddItemManually.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddItemManually() {
  let [products, setProducts] = useState([
    {
      name: "Apples",
      expire: "12/05",
      quantity: 1,
      location: "fridge",
      size: "20kg",
      allergens: "nuts",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    },
    {
      name: "Bananas",
      expire: "02/05",
      quantity: 3,
      location: "cabinet",
      size: "20kg",
      allergens: "nuts",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    },
    {
      name: "Oranges",
      expire: "03/03",
      quantity: 10,
      location: "cabinet",
      size: "20kg",
      allergens: "nuts",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    },
    {
      name: "Grapes",
      expire: "04/02",
      quantity: 4,
      location: "fridge",
      size: "20kg",
      allergens: "nuts",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    },
    {
      name: "Melon",
      expire: "23/06",
      quantity: 5,
      location: "fridge",
      size: "20kg",
      allergens: "nuts",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    },
    {
      name: "Berries",
      expire: "23/04",
      quantity: 2,
      location: "fridge",
      size: "20kg",
      allergens: "cream",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/220px-Apple_logo_black.svg.png",
    },
  ]);

  function addItem(event) {
    event.preventDefault();
    let newItem = {
      name: inputValue,
      expire: date,
      quantity: quantity,
      location: "",
      size: size,
      allergens: allergy,
      image: image,
    };
    let newItems = [...products, newItem];
    console.log(newItems);
    setProducts(newItems);
    setInputValue("");
    alert(`${newItem.name} has been added!`);
  }
  function handleItemChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
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
    setAllergy(event.target.value);
  }

  function handleImageUpload(event) {
    event.preventDefault();
    alert("Hello from Image Upload");
  }
  let [inputValue, setInputValue] = useState("");
  let barcode = "737628064502";
  let apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
  let [item, setItem] = useState("");
  let [image, setImage] = useState(null);
  let [description, setDescription] = useState("");
  let [size, setSize] = useState("");
  let [ingridients, setIngridients] = useState("");
  let [allergy, setAllergy] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [date, setDate] = useState("MM/DD/YYYY");

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
        <div className="active add-item-button" onClick={addItem}>
          ADD ITEM
        </div>
        <Link to="/">
          <div className="inactive add-item-button">CANCEL</div>
        </Link>
      </div>
    </div>
  );
}
