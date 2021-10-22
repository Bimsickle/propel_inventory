import React, { useState } from "react";
import axios from "axios";
import "./ItemDetails.css";

export default function ItemDetails(props) {
  console.log(props.location.itemDetailProps);
  let allInfo = props.location.itemDetailProps.itemDetail.product;
  console.log(allInfo);
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

  let [loaded, setLoaded] = useState(false);

  function searchItem() {
    setItem(allInfo.item.name);
    setImage();
    setDescription(allInfo.item.description);
    setIngridients(allInfo.item.ingridients);
    setQuantity(allInfo.quantity);
    setAllergy(allInfo.item.allergy_info);
    setSize(allInfo.item.size);
    setDate(allInfo.exp_date);
  }

  function handleItemChange(event) {
    event.preventDefault();
  }
  if (loaded) {
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
        <div className="col-12 item-name item-details-form">{ingridients}</div>
        <div className="">
          <i className="material-icons add-shopping-list-icon">add_circle</i>
        </div>
        <div className="Add-shopping-list">Add to shopping list</div>
      </div>
    );
  } else {
    setLoaded(true);
    searchItem();
    return "Loading";
  }
}
