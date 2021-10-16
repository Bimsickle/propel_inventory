import React, { useState } from "react";
import axios from "axios";
import "./ItemDetails.css";

export default function ItemDetails(props) {
  let product = props.product;
  let [inputValue, setInputValue] = useState("");
  let barcode = "737628064502";
  let apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
  let [item, setItem] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [size, setSize] = useState("");
  let [ingridients, setIngridients] = useState("");
  let [allergy, setAllergy] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [date, setDate] = useState("MM/DD/YYYY");
  console.log(props.item);

  function searchItem(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleApiResponse(response) {
    setItem(response.data.product.generic_name);
    setImage(response.data.product.image_front_small_url);
    setDescription(response.data.product.product_name);
    setIngridients(response.data.product.ingredients_text);
    setAllergy(response.data.product.allergens_from_ingredients);
    setSize(response.data.product.serving_size);

    console.log(response);
  }

  function handleItemChange(event) {
    event.preventDefault();
  }

  return (
    <div className="ItemDetails">
      <div className="text-end bin-icon">
        <i className="material-icons-outlined">delete</i>
      </div>
      <img className="item-picture" src={image} />
      <div className="row">
        <div className="col-12 item-name item-details-form">{item}</div>
        <div className="col-3 item-details-form ms-5">Size</div>
        <div className="col-3 item-details-form quantity">
          <span>-</span>
          {quantity}
          <span>+</span>
        </div>
        <div className="col-3 item-details-form me-5">{date}</div>
      </div>
      <div className="col-12 item-name item-details-form">Ingridient info</div>
      <div className="">
        <i className="material-icons add-shopping-list-icon">add_circle</i>
      </div>
      <div onClick={searchItem} className="Add-shopping-list">
        Add to shopping list
      </div>
    </div>
  );
}
