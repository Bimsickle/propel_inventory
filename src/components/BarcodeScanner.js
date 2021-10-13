import React, { useState } from "react";
import "./BarcodeScanner.css";
import { Link } from "react-router-dom";

export default function BarcodeScanner() {
  let [playing, setPlaying] = useState("false");
  let height = 200;
  let width = 200;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("webcam-scanner")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("webcam-scanner")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div className="BarcodeScanner">
      <div className="barcode-container">
        <video
          height={height}
          width={width}
          muted
          autoPlay
          className="webcam-scanner"
        ></video>
      </div>
      <div className="webcam-input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
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
  );
}
