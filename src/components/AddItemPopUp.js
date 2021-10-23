import React from "react";
import "./AddItemPopUp.css";
import { Link } from "react-router-dom";

export default function AddItemPopUp() {
  return (
    <div className="AddItemPopUp">
      <div className="text-end">
        <Link to="/">
          <i className="material-icons-outlined p-3">highlight_off</i>
        </Link>
      </div>
      <div className="main-text">
        Would you like to add an item to your inventory or list?
      </div>
      <div className="buttons mt-3">
        <Link to="/choose-input">
          <div className="active additem-button">ADD TO INVENTORY</div>
        </Link>
        <Link to="/add-to-list">
          <div className="active additem-button">ADD TO LIST</div>
        </Link>
      </div>
    </div>
  );
}
