import React, { useState } from "react";
import "./BarcodeScanner.css";
import { Link } from "react-router-dom";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import axios from "axios";

export default function BarcodeScanner() {
  const [barcode, setBarcode] = React.useState("Not Found");
  let url = "http://localhost:8000/api/create-item-barcode";

  if (barcode !== "Not Found") {
    axios.post(url, barcode).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

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
              if (result) setBarcode(result.text);
              else setBarcode("Not Found");
            }}
          />
          <p>{barcode}</p>
        </div>

        <div className="buttons mt-3">
          <div className="active-button barcode-button">SCAN NOW</div>
          <div className="inactive barcode-button">CANCEL</div>
        </div>
      </div>
    </>
  );
}
