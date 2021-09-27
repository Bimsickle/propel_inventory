import React, { useState } from "react";

export default function ShoppingList() {
  let [shoppingItem, setShoppingItem] = useState(null);
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
      <ul>
        <li>Fish fingers</li>
        <li>Sausages</li>
        <li>Smoked salmon</li>
        <li>Prawns</li>
      </ul>
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
