import React, { useState } from "react";
import "./BarcodeScanner.css";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

export default function BarcodeScanner() {
  const [barcode, setBarcode] = React.useState("Not Found");
  let url = "http://localhost:8000/api/create-item-barcode";
  let [item, setItem] = useState({
    item: {
      name: "string",
      code: "978123456789",
      description: "string",
      size: "string",
      ingredients: ["string"],
      allergy_info: "string",
    },
    quantity: 0,
    exp_date: "2021-10-29T12:44:22.475Z",
    location: "string",
  });

  function scanBarcode(event) {
    event.preventDefault();
    setItem({
      item: {
        name: "string",
        code: "978123456789",
        description: "string",
        size: "string",
        ingredients: ["string"],
        allergy_info: "string",
      },
      quantity: 0,
      exp_date: "2021-10-29T12:44:22.475Z",
      location: "string",
    });
    console.log(item);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(function (respones) {
        return respones.json();
      })
      .then(function (data) {
        console.log(data);
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
          <div className="active-button barcode-button" onClick={scanBarcode}>
            SCAN NOW
          </div>
          <div className="inactive barcode-button">CANCEL</div>
        </div>
      </div>
    </>
  );
}
