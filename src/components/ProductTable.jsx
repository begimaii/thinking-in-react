import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import products from "../assets/data";

export default function ProductTable({ filteredProducts, inStockProducts }) {
  let lastCategory = null;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((item) => {
          const categoryRow =
            lastCategory !== item.category ? (
              <tr style={{ backgroundColor: "lightgray" }} key={item.category}>
                <ProductCategoryRow category={item.category} />
              </tr>
            ) : null;
          lastCategory = item.category;
          return (
            <React.Fragment key={item.id}>
              {categoryRow}
              <ProductRow item={item} />
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
