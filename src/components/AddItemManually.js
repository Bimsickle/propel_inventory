import React, { useState, useEffect } from "react";
import "./AddItemManually.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddItemManually() {
  let [item, setItem] = useState("");
  let [size, setSize] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [quantity, setQuantity] = useState(0);
  let [date, setDate] = useState("MM/DD/YYYY");
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
        allergy_info: ingredients,
      },
      quantity: quantity,
      exp_date: `${date}T14:34:40.778Z`,
      location: "string",
    });
    console.log("new value of products", products);
  }, [item, date, quantity, ingredients, size]); // eslint-disable-line react-hooks/exhaustive-deps

  function addItemApi(event) {
    event.preventDefault();
    setProducts({
      item: {
        name: item,
        code: "string",
        description: "string",
        size: size,
        ingredients: ["string"],
        allergy_info: ingredients,
      },
      quantity: quantity,
      exp_date: `${date}T14:34:40.778Z`,
      location: "string",
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

  /// fetch("http://localhost:8000/api/create-item/", {
  //  method: "POST",
  //   body: JSON.stringify(products),
  //  })
  //    .then(function (respones) {
  //   return respones.json();
  //     })
  //    .then(function (data) {
  //      console.log(data);
  //     alert(`${item} was added`);
  //    });
  // }

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
      <span>
        {" "}
        <i className="material-icons-outlined details-icon shopping-list-icon">
          check_box
        </i>{" "}
        Pantry{" "}
      </span>
      <span>
        <i className="material-icons-outlined details-icon shopping-list-icon">
          check_box_outline_blank
        </i>
        Refrigerator
      </span>
      <span>
        <i className="material-icons-outlined details-icon shopping-list-icon">
          check_box_outline_blank
        </i>
        Freezer
      </span>
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
