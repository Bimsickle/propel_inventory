import React from "react";
import { useState, useEffect } from "react";
import "./InventoryList.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function InventoryList() {
  let [loaded, setLoaded] = useState("location");
  let [products, setProducts] = useState([{}]);
  let url = "http://localhost:8000/api/item";

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, [url]);

  function sort(event) {
    event.preventDefault();
    if (event.target.value === "expiration date") {
      setLoaded("expiration date");
      axios.get("http://localhost:8000/api/item/date").then((response) => {
        setProducts(response.data);
      });
    }
    if (event.target.value === "location") {
      setLoaded("location");
    }
    if (event.target.value === "low in stock") {
      setLoaded("low in stock");
      axios.get("http://localhost:8000/api/item/sum").then((response) => {
        setProducts(response.data);
      });
    }
  }

  if (loaded === "location")
    return (
      <div className="InventoryList">
        <div className="text-end sorting">
          <label> Sort by:</label>
          <select className="dropdown0" onChange={sort}>
            <option value="location">Location</option>
            <option value="expiration date">Expiration Date</option>
            <option value="low in stock">Low in Stock</option>
          </select>
        </div>
        <div>
          <div className="ps-3">
            <strong>Pantry</strong>
            {products.map(function (product, index) {
              return (
                <div key={index} className="item-slot row">
                  <div className="col-6">
                    <div className="product-name">{product.item?.name}</div>
                    <div className="quantity">Qty {product.quantity}</div>
                  </div>
                  <div className="col-6 text-end details-icon">
                    <Link
                      to={{
                        pathname: "/item-details",
                        itemDetailProps: { itemDetail: { product } },
                      }}
                    >
                      <i className="material-icons-outlined more-info-arrow">
                        chevron_right
                      </i>
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ps-3">
          <strong>Refrigerator</strong>
        </div>
      </div>
    );

  if (loaded === "low in stock") {
    return (
      <div className="InventoryList">
        <div className="text-end sorting">
          <label> Sort by:</label>
          <select className="dropdown0" onChange={sort}>
            <option value="location">Location</option>
            <option value="expiration date">Expiration Date</option>
            <option value="low in stock">Low in Stock</option>
          </select>
        </div>
        <div>
          <div className="ps-3">
            <strong>Low in Stock</strong>
            {products.map(function (product, index) {
              return (
                <div key={index} className="item-slot row">
                  <div className="col-6">
                    <div className="product-name">{product._id}</div>
                    <div className="quantity">Qty {product.quantity}</div>
                  </div>
                  <div className="col-6 text-end details-icon">
                    <Link
                      to={{
                        pathname: "/item-details",
                        itemDetailProps: { itemDetail: { product } },
                      }}
                    >
                      <i className="material-icons-outlined">chevron_right</i>
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  if (loaded === "expiration date") {
    return (
      <div className="InventoryList">
        <div className="text-end sorting">
          <label> Sort by:</label>
          <select name="location" className="dropdown0" onChange={sort}>
            <option value="location">Location</option>
            <option value="expiration date">Expiration Date</option>
            <option value="low in stock">Low in Stock</option>
          </select>
        </div>
        <div>
          <div className="ps-3">
            <strong>Expiring First</strong>
            {products.map(function (product, index) {
              return (
                <div key={index} className="item-slot row">
                  <div className="col-6">
                    <div className="product-name">{product.item?.name}</div>
                    <div className="quantity">Qty {product.quantity}</div>
                  </div>
                  <div className="col-6 text-end details-icon">
                    <Link
                      to={{
                        pathname: "/item-details",
                        itemDetailProps: { itemDetail: { product } },
                      }}
                    >
                      <i className="material-icons-outlined">chevron_right</i>
                    </Link>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

///<div>{product.name}</div>
///   <div>{product.expire}</div>
///   <div>{product.quantity}</div>
///    <div> {product.location}</div>
