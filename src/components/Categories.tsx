import React from "react";
import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <div>
      <div className="flex flex-warp justify-between items-center">
        <CategoryItem
          image="https://demo.kaliumtheme.com/bookstore/wp-content/uploads/2019/04/uncategorized.png"
          title="Sản phẩm mới"
        ></CategoryItem>
        <CategoryItem
          image="https://demo.kaliumtheme.com/bookstore/wp-content/uploads/2019/04/biography.png"
          title="Sản phẩm bán chạy"
        ></CategoryItem>
      </div>
    </div>
  );
}

export default Categories;
