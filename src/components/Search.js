import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [inputValue, setInputValue] = useState("");

  function handleSearchValueChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  console.log(inputValue);

  return (
    <div className="Search">
      <form
        className="search-bar shadow pb-3"
        onChange={handleSearchValueChange}
      >
        <span className="material-icons-outlined">search</span>
        <input type="text" className="search-form"></input>
        <span className="material-icons">highlight_off</span>
      </form>
    </div>
  );
}
