import React, { useState } from "react";
import axios from "axios";
import "./ItemDetails.css";

export default function ItemDetails() {
  let [inputValue, setInputValue] = useState("");
  let barcode = "737628064502";
  let apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
  let [item, setItem] = useState("");
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [size, setSize] = useState("");
  let [ingridients, setIngridients] = useState("");
  let [allergy, setAllergy] = useState("");

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
      <div>Icon</div>
      <img src={image} />
      <div className="row">
        <div className="col-12 item-name">{item}</div>
        <div className="col-4">{size}</div>
        <div className="col-4">Quantity</div>
        <div className="col-4">Date</div>
      </div>
      <button>Ingridient info</button>
      <div onClick={searchItem}>Add to shopping list</div>
    </div>
  );
}
