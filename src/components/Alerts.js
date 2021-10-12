import React, { useState } from "react";
import "./Alerts.css";

export default function Alerts() {
  let [products, setProducts] = useState([
    { name: "Apples", expire: "12/05", quantity: 1, location: "fridge" },
    { name: "Bananas", expire: "02/05", quantity: 3, location: "cabinet" },
    { name: "Oranges", expire: "03/03", quantity: 10, location: "cabinet" },
    { name: "Grapes", expire: "04/02", quantity: 4, location: "fridge" },
    { name: "Melon", expire: "23/06", quantity: 5, location: "fridge" },
    { name: "Berries", expire: "23/04", quantity: 2, location: "fridge" },
  ]);

  function showItemDetails() {
    alert("Hello");
  }

  return (
    <div className="Alerts">
      <div className="text-center alert-header">
        You have <span className="alert-number">3</span> items expiring soon!
      </div>

      {products.map(function (product, index) {
        return (
          <div key={index} className="item-slot row">
            <div className="col-4">
              <div className="product-name">{product.name}</div>
              <div className="quantity">Qty {product.quantity}</div>
            </div>
            <div className="col-4 expire">Expires {product.expire}</div>

            <div className="col-4 text-end details-icon">
              <i
                className="material-icons-outlined me-4"
                onClick={showItemDetails}
              >
                chevron_right
              </i>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="active add-item-button me-5">DISMISS</div>
    </div>
  );
}
