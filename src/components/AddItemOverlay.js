import React, { useState } from "react";
import "./AddItemOverlay.css";

export default function AddItemOverlay() {
  return (
    <div className="AddItemOverlay">
      <div className="item-details-form add-item">Add Item</div>
      <div className="row">
        <div className="item-details-form add-quantity col-4">
          <span className="">+</span>
          <span className="p-4">0</span>
          <span className="">-</span>
        </div>
        <div className="col-4">
          <i className="material-icons add-shopping-list-icon">add_circle</i>{" "}
          <span className="">Add</span>
        </div>
      </div>
      <hr />
      <div className="past-item-block">
        <div className="past-items">Past Items</div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span> Item</span>
        </div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span> Item</span>
        </div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span> Item</span>
        </div>
      </div>
    </div>
  );
}
