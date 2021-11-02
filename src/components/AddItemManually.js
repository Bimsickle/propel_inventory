import React, { useState, useEffect } from "react";
import "./AddItemManually.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddItemManually() {
  let [item, setItem] = useState("");
  let [size, setSize] = useState("");
  let [allergy, setAllergy] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [date, setDate] = useState("YYYY-MM-DD");
  let [location, setLocation] = useState("");
  let url = "http://localhost:8000/api/create-item/";
  let [products, setProducts] = useState({
    item: {
      name: "random",
      code: "string",
      description: "string",
      size: "string",
      ingredients: ["string"],
      allergy_info: "string",
    },
    quantity: 0,
    exp_date: "2021-10-24T14:34:40.778Z",
    location: "string",
  });

  useEffect(() => {
    setProducts({
      item: {
        name: item,
        code: "string",
        description: "string",
        size: size,
        ingredients: ["string"],
        allergy_info: allergy,
      },
      quantity: quantity,
      exp_date: `${date}T14:34:40.778Z`,
      location: location,
    });
    console.log("new value of products", products);
  }, [item, date, quantity, allergy, size, location]); // eslint-disable-line react-hooks/exhaustive-deps

  function addItemApi(event) {
    event.preventDefault();
    setProducts({
      item: {
        name: item,
        code: "string",
        description: "string",
        size: size,
        ingredients: ["string"],
        allergy_info: allergy,
      },
      quantity: quantity,
      exp_date: `${date}T14:34:40.778Z`,
      location: location,
    });
    console.log(products);

    axios
      .post(url, products)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert(`${item} was added`);
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
    setAllergy(event.target.value);
  }

  function handleImageUpload(event) {
    event.preventDefault();
    alert("Hello from Image Upload");
  }

  function handleLocationFridge(event) {
    event.preventDefault();
    setLocation("refrigerator");
  }
  function handleLocationPantry(event) {
    event.preventDefault();
    setLocation("pantry");
  }
  function handleLocationFreezer(event) {
    event.preventDefault();
    setLocation("freezer");
  }

  return (
    <div className="AddItemManually pt-5">
      <div className="image-container" onClick={handleImageUpload}>
        <i className="material-icons-outlined add-photo-icon">add_a_photo</i>
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
      <div className="locations">
        <span className="location-checkbox">
          <i
            className="material-icons-outlined details-icon shopping-list-icon"
            onClick={handleLocationFridge}
          >
            check_box_outline_blank
          </i>
          <span className="location-text">Refrigerator</span>
        </span>
        <span className="location-checkbox">
          <i
            className="material-icons-outlined details-icon shopping-list-icon"
            onClick={handleLocationPantry}
          >
            check_box_outline_blank
          </i>
          <span className="location-text">Pantry</span>
        </span>
        <span className="location-checkbox">
          <i
            className="material-icons-outlined details-icon shopping-list-icon"
            onClick={handleLocationFreezer}
          >
            check_box_outline_blank
          </i>
          <span className="location-text">Freezer</span>
        </span>
      </div>
      <div className="buttons m-3">
        <div className="active-button add-item-button" onClick={addItemApi}>
          ADD ITEM
        </div>
        <Link to="/">
          <div className="inactive add-item-button">CANCEL</div>
        </Link>
      </div>
    </div>
  );
}
