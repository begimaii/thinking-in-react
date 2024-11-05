import React from "react";

export default function ProductCategoryRow(props) {
  const { category } = props;
  return <th colSpan={3}>{category}</th>;
}
