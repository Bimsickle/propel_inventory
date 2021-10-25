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
          <div className="barcode-info">
            Scan an item’s barcode to <br />
            add it to your inventory.
          </div>
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

        <div className="buttons mt-3">
          <div className="active-button barcode-button">SCAN NOW</div>
          <div className="inactive barcode-button">CANCEL</div>
        </div>
      </div>
    </>
  );
}
