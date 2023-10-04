import React from "react";
import LinkIcon from "@mui/icons-material/Link";

interface CardBlogProps {
  time: string;
  title: string;
  image: string;
}

function CardBlog(props: CardBlogProps) {
  return (
    <div className="flex w-[555px] h-[110px]">
      <div className="w-[50%] h-full relative group cursor-pointer">
        <img src={props.image} alt="" className="object-cover w-full h-full" />
        <span className="absolute top-0 inset-0 bg-green-300 transition-opacity duration-500 delay-100 ease-in-out group-hover:opacity-70 opacity-0">
          <LinkIcon className="absolute left-0 right-0 bottom-0 top-0 m-auto group-hover:opacity-100 text-white" />
        </span>
      </div>
      <div className="px-10 flex flex-col justify-center cursor-pointer">
        <p className="text-sm text-gray-600 mb-2">{props.time.toUpperCase()}</p>
        <h2 className="transition-colors duration-300 delay-100 ease-in-out hover:text-green-500">
          {props.title}
        </h2>
      </div>
    </div>
  );
}

export default CardBlog;
