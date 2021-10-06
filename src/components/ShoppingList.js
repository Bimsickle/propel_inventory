import React, { useState } from "react";

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
      <table>
        <caption>Shopping List</caption>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Name of the item</th>
          </tr>
        </thead>
        <tbody>
          {shoppingProducts.map(function (shoppingProduct, index) {
            return (
              <tr key={index}>
                <td>
                  <span onClick={() => handleQuantityDecrease(index)}>➖</span>
                  {shoppingProduct.quantity}
                  <span onClick={() => handleQuantityIncrease(index)}>➕</span>
                </td>
                <td>{shoppingProduct.name}</td>
                <td onClick={() => itemComplete(index)}>
                  {shoppingProduct.isSelected ? (
                    <span>✔️</span>
                  ) : (
                    <span>❌</span>
                  )}
                </td>
              </tr>
            );
          })}
          <th>
            Total: <span>{totalItemCount}</span>
          </th>
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

      <button className="btn btn-primary">Scan Barcode</button>
      <br />
      <button className="btn btn-primary">Add from Inventory list</button>
    </div>
  );
}
