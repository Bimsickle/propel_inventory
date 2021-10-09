import React from "react";
import { Link } from "react-router-dom";
import "./HomepageNav.css";

export default function HomepageNav() {
  return (
    <div className="HomepageNav pt-3">
      <div className="NavBar">
        <div className="row">
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined nav-icon">home</i>
            Home
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined nav-icon">list_alt</i>
            <br />
            List
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined nav-icon">
              add_circle_outline
            </i>
            <div className="add-item-nav">Add Item</div>
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined nav-icon">notifications</i>
            Alerts
          </div>
          <div className="col-2 nav-elements">
            <i className="material-icons-outlined nav-icon">search</i>Search
          </div>
        </div>
      </div>
    </div>
  );
}
