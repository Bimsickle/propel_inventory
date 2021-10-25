import React, { useState } from "react";
import "./AddItemOverlay.css";
import { Link } from "react-router-dom";

export default function AddItemOverlay() {
  return (
    <div className="AddItemOverlay">
      <header>
        <Link to="/">
          <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/019/658/original/Rectangle_1.png?1635022936" />
        </Link>
      </header>
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
          <span className="item"> Item</span>
        </div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span className="item"> Item</span>
        </div>
        <div className="past-items-list">
          <i className="material-icons add-item-icon">add_circle</i>
          <span className="item"> Item</span>
        </div>
      </div>
    </div>
  );
}
