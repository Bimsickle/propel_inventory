import React from "react";
import "./HomepageNav.css";
import { NavLink } from "react-router-dom";

export default function HomepageNav() {
  return (
    <div className="HomepageNav pt-3">
      <div className="NavBar">
        <div className="row">
          <div className="col-2 nav-elements">
            <NavLink to="/">
              <i className="material-icons-outlined nav-icon">home</i>
              Home
            </NavLink>
          </div>
          <div className="col-2 nav-elements">
            <NavLink to="/shopping-list">
              <i className="material-icons-outlined nav-icon">list_alt</i>
              <br />
              List
            </NavLink>
          </div>
          <div className="col-2 nav-elements">
            <NavLink to="/add-item">
              <i className="material-icons-outlined nav-icon">add_circle</i>
              <div className="add-item-nav">Add Item</div>
            </NavLink>
          </div>
          <div className="col-2 nav-elements">
            <NavLink to="/alerts">
              <i className="material-icons-outlined nav-icon">notifications</i>
              Alerts
            </NavLink>
          </div>
          <div className="col-2 nav-elements">
            <NavLink to="/search">
              <i className="material-icons-outlined nav-icon">search</i>Search
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
