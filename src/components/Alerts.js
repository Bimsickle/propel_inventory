import React, { useState } from "react";
import "./Alerts.css";
import { Link } from "react-router-dom";
import axios from "axios";
import EditedDate from "./EditedDate";

export default function Alerts() {
  let [products, setProducts] = useState([{}]);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    let url = "http://localhost:8000/api/item/expired";
    axios.get(url).then((response) => {
      setProducts(response.data);
      console.log(products);
    });
  }

  if (loaded) {
    return (
      <div className="Alerts">
        <div className="text-center alert-header">
          You have <span className="alert-number">3</span> items expiring soon!
        </div>

        {products.map(function (product, index) {
          return (
            <div key={index} className="item-slot row ps-4">
              <div className="col-5">
                <div className="product-name">{product.item?.name}</div>
                <div className="quantity">Qty {product.quantity}</div>
              </div>
              <div className="col-5 expire">
                Expires <EditedDate date={product.exp_date} />
              </div>

              <div className="col-2 text-end details-icon">
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
        <div className="active-button add-item-button me-5">DISMISS</div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
