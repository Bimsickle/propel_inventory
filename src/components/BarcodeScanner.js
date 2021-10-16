import React, { useState } from "react";
import "./BarcodeScanner.css";
import { Link } from "react-router-dom";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import axios from "axios";

export default function BarcodeScanner() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <div className="BarcodeScanner">
        <div className="barcode-container">
          <BarcodeScannerComponent
            width={200}
            height={200}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
              else setData("Not Found");
            }}
          />
          <p>{data}</p>
        </div>
        <hr />
        <div className="barcode-info">
          Scan an item’s barcode to add it
          <br /> to your inventory.
        </div>
        <div className="buttons mt-3">
          <div className="active barcode-button">SCAN</div>
          <div className="inactive barcode-button">CANCEL</div>
        </div>
      </div>
    </>
  );
}
