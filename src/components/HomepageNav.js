import React from "react";
import { Link } from "react-router-dom";
import "./HomepageNav.css";

export default function HomepageNav() {
  return (
    <div className="HomepageNav pt-3">
      <div className="NavBar">
        <div className="row">
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined">home</i>
            Home
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined">list_alt</i>List
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined">add_circle_outline</i>
            <br />
            Add Item
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined">notifications</i>Alerts
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined">search</i>Search
          </div>
        </div>
      </div>

      <div>
        <Link to="/shopping-list"> Shopping List </Link>
      </div>
      <div>
        <Link to="/inventory-list"> Inventory List </Link>
      </div>
    </div>
  );
}
