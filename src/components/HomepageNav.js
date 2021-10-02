import React from "react";
import { Link } from "react-router-dom";

export default function HomepageNav() {
  return (
    <div className="HomepageNav">
      <div>
        <Link to="/shopping-list"> Shopping List </Link>
      </div>
      <div>
        <Link to="/inventory-list"> Inventory List </Link>
      </div>
      <div>
        <Link to="/item-list"> Item List </Link>
      </div>
      <div>
        <Link to="/"> Homepage</Link>
      </div>
    </div>
  );
}
