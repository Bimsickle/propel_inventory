import React from "react";
import { Link } from "react-router-dom";
import "./ChooseInput.css";

export default function ChooseInput() {
  return (
    <div className="ChooseInput">
      <div className="text-end">
        <Link to="/">
          <i className="material-icons-outlined p-3 ">highlight_off</i>
        </Link>
      </div>
      <div className="main-text">How would you like to add your item?</div>
      <div className="buttons mt-3">
        <Link to="/barcode">
          <div className="icon-container">
            <i class="material-icons-outlined">photo_camera</i>
            <div>
              Scan <br />
              Barcode
            </div>
          </div>
        </Link>
        <Link to="/add-manually">
          <div className="icon-container">
            <i class="material-icons-outlined">keyboard</i>
            <div>
              Enter
              <br /> Manually
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
