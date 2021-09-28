import React, { useState } from "react";

export default function ShoppingList() {
  let [shoppingItem, setShoppingItem] = useState(null);
  let shoppingProducts = [
    "Fish fingers",
    "Sausages",
    "Smoked Salmon",
    "Prawns",
  ];
  function addShoppingItem(event) {
    event.preventDefault();
    alert(`${shoppingItem} added to your Shopping List!`);
  }

  function handleShoppingItemChange(event) {
    event.preventDefault();
    setShoppingItem(event.target.value);
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
                <td>{shoppingProduct}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form onSubmit={addShoppingItem}>
        <input
          type="search"
          id="search-form"
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
