import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ShoppingList.css";
import Homepage from "./Homepage";

export default function ShoppingList() {
  let [shoppingProducts, setShoppingProducts] = useState([{}]);
  let [inputValue, setInputValue] = useState("");
  let [totalItemCount, setTotalItemCount] = useState("");
  let [loaded, setLoaded] = useState(false);
  let url = "http://localhost:8000/api/shopping/item";

  useEffect(() => {
    axios.get(url).then((response) => {
      setShoppingProducts(response.data);
    });
  }, []);
  console.log(shoppingProducts);

  function addShoppingItem(event) {
    event.preventDefault();
    let newItem = { name: inputValue, quantity: 1, isSelected: false };
    let newItems = [...shoppingProducts, newItem];
    console.log(newItems);
    setShoppingProducts(newItems);
    setInputValue("");
  }

  let itemComplete = (index) => {
    const newItems = [...shoppingProducts];

    newItems[index].bought = !newItems[index].bought;

    setShoppingProducts(newItems);
  };

  if (loaded) {
    return (
      <div className="ShoppingList">
        <div className="text-end p-3">
          <strong>Purchased</strong>
        </div>
        <div></div>
        <div className="ps-3">
          <strong>Pantry</strong>
        </div>
        {shoppingProducts.map(function (shoppingProduct, index) {
          return (
            <div key={index} className="item-slot row">
              <div className="col-6">
                <div className="product-name">{shoppingProduct.item?.name}</div>
                <div className="quantity">Qty {shoppingProduct.quantity}</div>
              </div>
              <div className="col-6 text-end">
                <div onClick={() => itemComplete(index)}>
                  {shoppingProduct.bought ? (
                    <span class="material-icons-outlined details-icon">
                      check_box
                    </span>
                  ) : (
                    <span class="material-icons-outlined details-icon">
                      check_box_outline_blank
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div className="ps-3">
          <strong>Refrigerator</strong>
        </div>
      </div>
    );
  } else {
    setLoaded(true);

    return "Loading";
  }
}
