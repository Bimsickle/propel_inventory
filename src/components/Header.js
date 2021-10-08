import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="App-name">
        <div className="row">
          <div className="col-6">Inventory App</div>
          <div className="col-6 setting-icon">
            <i class="material-icons-outlined">settings</i>
          </div>
        </div>
      </div>
    </div>
  );
}
