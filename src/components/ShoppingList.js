import React, { useState } from "react";
import "./ShoppingList.css";

export default function ShoppingList() {
  let [shoppingProducts, setShoppingProducts] = useState([
    { name: "Fish fingers", quantity: 2, isSelected: false },
    { name: "Sausages", quantity: 1, isSelected: true },
    { name: "Smoked Salmon", quantity: 2, isSelected: false },
    { name: "Prawns", quantity: 4, isSelected: false },
  ]);
  let [inputValue, setInputValue] = useState("");
  let [totalItemCount, setTotalItemCount] = useState("");

  function addShoppingItem(event) {
    event.preventDefault();
    let newItem = { name: inputValue, quantity: 1, isSelected: false };
    let newItems = [...shoppingProducts, newItem];
    console.log(newItems);
    setShoppingProducts(newItems);
    setInputValue("");
  }

  function handleShoppingItemChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  let itemComplete = (index) => {
    let newItems = [...shoppingProducts];
    newItems[index].isSelected = !newItems[index].isSelected;
    setShoppingProducts(newItems);
  };

  let handleQuantityIncrease = (index) => {
    let newItems = [...shoppingProducts];
    newItems[index].quantity++;
    setShoppingProducts(newItems);
    calculateTotal();
  };

  let handleQuantityDecrease = (index) => {
    let newItems = [...shoppingProducts];
    newItems[index].quantity--;
    setShoppingProducts(newItems);
    calculateTotal();
  };

  let calculateTotal = () => {
    let totalItemCount = shoppingProducts.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="ShoppingList">
      <div className="text-end sorting">
        Sort by:{" "}
        <span>
          Location{" "}
          <i class="material-icons-outlined filter-icon">keyboard_arrow_down</i>
        </span>
      </div>
      <div className="ps-3">
        <strong>Pantry</strong>
      </div>
      {shoppingProducts.map(function (shoppingProduct, index) {
        return (
          <div key={index} className="item-slot row">
            <div className="col-6">
              <div className="product-name">{shoppingProduct.name}</div>
              <div className="quantity">Qty {shoppingProduct.quantity}</div>
            </div>
            <div className="col-6 text-end">
              <div onClick={() => itemComplete(index)}>
                {shoppingProduct.isSelected ? (
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
    </div>
  );
}
