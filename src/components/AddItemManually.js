import React, { useState } from "react";
import "./AddItemManually.css";

export default function AddItemManually() {
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

  return (
    <div className="AddItemManually pt-3">
      <div className="image-container">
        <i class="material-icons-outlined add-photo-icon">add_a_photo</i>
        <div className="image-text">Add photos</div>
      </div>
      <form>
        <div className="row">
          <input
            type="text"
            placeholder="Item Name"
            className="col-12 item-name item-details-form"
          />
          <input
            type="text"
            placeholder="Size"
            className="col-3 item-details-form ms-5"
          />
          <input
            type="text"
            placeholder="- +"
            className="col-3 item-details-form quantity"
          />
          <input
            type="text"
            placeholder="MM/DD/YY"
            className="col-3 item-details-form me-5"
          />
          <input
            type="text"
            placeholder="Add allergen information"
            className="col-12 item-name item-details-form"
          />
        </div>
      </form>
      <div className="buttons m-3">
        <div className="active add-item-button">ADD ITEM</div>
        <div className="inactive add-item-button">CANCEL</div>
      </div>
    </div>
  );
}
