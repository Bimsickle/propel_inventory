import React, { useState } from "react";
import axios from "axios";

export default function ItemList() {
  let [inputValue, setInputValue] = useState("");
  let barcode = "737628064502";
  let apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

  console.log(apiUrl);
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

    console.log(response);
  }

  function handleItemChange(event) {
    event.preventDefault();
  }

  return (
    <div className="ItemList">
      <table>
        <caption>Item List</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Barcode</th>
            <th>Description</th>
            <th>Size</th>
            <th>Ingridients</th>
            <th>Allergy info</th>
          </tr>
        </thead>
        <tbody>
          <td>{item}</td>
          <td>{barcode}</td>
          <td>
            <img src={image} />
          </td>
          <td>{description}</td>
          <td>{size}</td>
          <td>{ingridients}</td>
          <td>{allergy}</td>
        </tbody>
      </table>

      <form onSubmit={searchItem}>
        <input type="search" id="search-form" onChange={handleItemChange} />
        <input type="submit" value="Item search" className="btn btn-primary" />
      </form>
    </div>
  );
}
