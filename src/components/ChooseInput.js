import React from "react";
import { Link } from "react-router-dom";

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
          <div>Scan Barcode</div>
        </Link>
        <Link to="/add-manually">
          <div>Enter Manually</div>
        </Link>
      </div>
    </div>
  );
}
