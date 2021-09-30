import React, { useState } from "react";

export default function ShoppingList() {
  let [shoppingProducts, setShoppingProducts] = useState([
    { name: "Fish fingers", quantity: 2, isSelected: false },
    { name: "Sausages", quantity: 1, isSelected: true },
    { name: "Smoked Salmon", quantity: 2, isSelected: false },
    { name: "Prawns", quantity: 4, isSelected: false },
  ]);
  let [inputValue, setInputValue] = useState(" ");

  function addShoppingItem(event) {
    event.preventDefault();
    let newItem = { name: inputValue, quantity: 1, isSelected: false };
    let newItems = [...shoppingProducts, newItem];
    console.log(newItems);
    setShoppingProducts(newItems);
  }

  function handleShoppingItemChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }
  return (
    <div className="ShoppingList">
      <table>
        <caption>Shopping List</caption>
        <thead>
          <tr>
            <th>Name of the item</th>
          </tr>
        </thead>
        <tbody>
          {shoppingProducts.map(function (shoppingProduct, index) {
            return (
              <tr key={index}>
                <td>{shoppingProduct.quantity}</td>
                <td>{shoppingProduct.name}</td>
                <td>
                  {shoppingProduct.isSelected ? (
                    <span>✔️</span>
                  ) : (
                    <span>❌</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form onSubmit={addShoppingItem}>
        <input
          type="search"
          id="search-form"
          value={inputValue}
          onChange={handleShoppingItemChange}
        />
        <input
          type="submit"
          value="Add item to shopping list"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
}
