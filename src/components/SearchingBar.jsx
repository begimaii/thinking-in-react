import React, { useState } from "react";
import products from "../assets/data";

export default function SearchingBar({
  search,
  setSearch,
  inStock,
  setInStock,
}) {
  return (
    <>
      <form>
        <input
          value={search}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </form>
    </>
  );
}
