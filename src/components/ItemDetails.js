import React, { useState } from "react";
import "./ItemDetails.css";
import { Link } from "react-router-dom";
import EditedDate from "./EditedDate";

export default function ItemDetails(props) {
  console.log(props.location.itemDetailProps);
  let allInfo = props.location.itemDetailProps.itemDetail.product;

  let [item, setItem] = useState("");
  let [image, setImage] = useState("");
  let [size, setSize] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [quantity, setQuantity] = useState(1);
  let [date, setDate] = useState("MM/DD/YYYY");

  let [loaded, setLoaded] = useState(false);

  function searchItem() {
    setItem(allInfo.item.name);
    setImage();
    setIngredients(allInfo.item.ingredients);
    setQuantity(allInfo.quantity);
    setSize(allInfo.item.size);
    setDate(allInfo.exp_date);
  }

  function addItemToList(event) {
    event.preventDefault();
    alert("Item was added to list!");
  }

  function deleteItem(event) {
    event.preventDefault();
    alert("Item was deleted!");
  }

  if (loaded) {
    return (
      <div className="ItemDetails">
        <header>
          <Link to="/">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/658/original/Rectangle_1.png?1635022936"
              alt="separator"
            />
          </Link>
        </header>
        <img className="item-picture" src={image} alt="item details" />
        <div className="row">
          <div className="col-12 item-name item-details-form">{item}</div>

          <div className="col-3 item-details-form ms-5">{size}</div>
          <div className="col-3 item-details-form">
            <EditedDate date={date} />
          </div>
          <div className="col-3 item-details-form quantity me-5">
            {quantity}
          </div>
        </div>
        <div className="text-start ingredients-title">
          <strong>Ingredients</strong>
        </div>
        <div className="col-12 item-name pb-5 ingredients-detail">
          {ingredients.map(function (ingredient, index) {
            return <div key={index}>{ingredient.text}</div>;
          })}
        </div>
        <div className="row">
          <div className="col-6" onClick={addItemToList}>
            <i className="material-icons add-shopping-list-icon">add_circle</i>
            <div className="text-under-icon">Add to List</div>
          </div>
          <div className="col-6">
            <div onClick={deleteItem}>
              <i className="material-icons-outlined bin-icon">delete</i>
            </div>
            <div className="text-under-icon">Delete Item</div>
          </div>
        </div>
      </div>
    );
  } else {
    setLoaded(true);
    searchItem();
    return "Loading";
  }
}
