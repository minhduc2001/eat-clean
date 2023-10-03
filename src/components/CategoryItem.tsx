import React from "react";

interface CategoryItemProps {
  title: string;
  image: string;
}

function CategoryItem(props: CategoryItemProps) {
  return (
    <div className="w-[100px] justify-center cursor-pointer group">
      <div className="rounded-full bg-green-500 w-[97px] h-[97px] mb-2 group-hover:bg-green-700">
        <img src={props.image} alt="" />
      </div>
      <p className="text-center text-gray-700 truncate text-sm group-hover:text-gray-900 ">
        {props.title.toUpperCase()}
      </p>
    </div>
  );
}

export default CategoryItem;
