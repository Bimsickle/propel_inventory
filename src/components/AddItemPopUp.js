import React from "react";
import "./AddItemPopUp.css";
import { Link } from "react-router-dom";

export default function AddItemPopUp() {
  return (
    <div className="AddItemPopUp pt-4">
      <div className="main-text">
        Would you like to add an item to your inventory or list?
      </div>
      <div className="buttons mt-3">
        <Link to="/choose-input">
          <div className="active-button additem-button">INVENTORY</div>
        </Link>
        <Link to="/add-to-list">
          <div className="active-button additem-button">LIST</div>
        </Link>
      </div>
    </div>
  );
}
