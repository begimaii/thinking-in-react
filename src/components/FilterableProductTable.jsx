import React, { useState } from "react";
import SearchingBar from "./SearchingBar";
import ProductTable from "./ProductTable";
import products from "../assets/data";

export default function FilterableProductTable() {
  const [search, setSearch] = useState("");
  const [inStock, setInStock] = useState(false);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const displayedProducts = inStock
    ? filteredProducts.filter((item) => item.stocked)
    : filteredProducts;

  return (
    <div className="App">
      <div>
        <SearchingBar
          setSearch={setSearch}
          search={search}
          inStock={inStock}
          setInStock={setInStock}
        />
        <ProductTable filteredProducts={displayedProducts} />
      </div>
    </div>
  );
}
