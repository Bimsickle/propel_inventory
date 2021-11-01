import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ShoppingList.css";
//import AddToInventory from "./AddToInventory";

export default function ShoppingList() {
  let [shoppingProducts, setShoppingProducts] = useState([{}]);
  let [loaded, setLoaded] = useState(false);
  let url = "http://localhost:8000/api/shopping/item";
  //let inventoryUrl = "http://localhost:8000/api/create-item/";

  useEffect(() => {
    axios.get(url).then((response) => {
      setShoppingProducts(response.data);
    });
  }, [url]);
  console.log(shoppingProducts);

  let itemComplete = (index) => {
    const newItems = [...shoppingProducts];

    newItems[index].bought = !newItems[index].bought;

    setShoppingProducts(newItems);
    console.log(shoppingProducts);
  };

  //function addtoInventory(shoppingProduct) {
  //  console.log(shoppingProduct);
  ///  axios
  //   .post(inventoryUrl, shoppingProduct)
  //    .then((res) => {
  //    console.log(res);
  //     console.log(res.data);
  //    alert(`Item was added to Inventory`);
  //   })
  //    .catch((err) => console.log(err));
  //}

  if (loaded) {
    return (
      <div className="ShoppingList">
        <div className="text-end p-3">
          <strong>Purchased</strong>
        </div>

        <div className="ps-3">
          <strong>Pantry</strong>
          {shoppingProducts.map(function (shoppingProduct, index) {
            return (
              <div key={index} className="item-slot row">
                <div className="col-6">
                  <div className="product-name">
                    {shoppingProduct.item?.name}
                  </div>
                  <div className="quantity">Qty {shoppingProduct.quantity}</div>
                </div>
                <div className="col-6 text-end">
                  <div onClick={() => itemComplete(index)}>
                    {shoppingProduct.bought ? (
                      <span className="material-icons-outlined details-icon shopping-list-icon">
                        check_box
                      </span>
                    ) : (
                      <span className="material-icons-outlined details-icon shopping-list-icon">
                        check_box_outline_blank
                      </span>
                    )}
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    setLoaded(true);

    return "Loading";
  }
}
